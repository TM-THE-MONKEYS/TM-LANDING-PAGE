/**
 * Regera as prévias da seção Projetos.
 *
 *   pnpm record:projects
 *
 * TM Transportadora sobe em localhost com NEXT_PUBLIC_USE_MOCKS=true
 * (dados demo, nunca a produção do cliente). A Majestade é gravada em
 * https://majestadepersonalizados.com.br.
 *
 * Saída: public/projects/{tm-transportadora,majestade}.{webm,mp4,webp,avif}
 * Masters ficam em scripts/.recordings/ (gitignored).
 */
import { spawn } from "node:child_process"
import { createRequire } from "node:module"
import { mkdir, rm, stat } from "node:fs/promises"
import path from "node:path"
import { chromium } from "playwright"

const require = createRequire(import.meta.url)
const ffmpegPath = require("ffmpeg-static")

const root = path.resolve(import.meta.dirname, "..")
const transportadoraDir = path.resolve(root, "../TM-TRANSPORTADORA-FRONT")
const outDir = path.join(root, "public", "projects")
const workDir = path.join(root, "scripts", ".recordings")
const port = 4187
const appOrigin = `http://127.0.0.1:${port}`

const DEMO_EMAIL = "admin@demo.tm"
const DEMO_PASSWORD = "demo1234"

const FIVE_MB = 5 * 1024 * 1024

function log(message) {
  console.log(`[record-projects] ${message}`)
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit", ...options })
    child.on("error", reject)
    child.on("exit", (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${command} exited ${code}`))
    })
  })
}

function killTree(child) {
  if (!child?.pid) return
  if (process.platform === "win32") {
    spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" })
    return
  }
  child.kill("SIGTERM")
}

async function waitForServer(url, child) {
  const started = Date.now()
  while (Date.now() - started < 120_000) {
    if (child.exitCode != null) {
      throw new Error("O Next da Transportadora encerrou antes de ficar pronto.")
    }
    try {
      const response = await fetch(url, { redirect: "manual" })
      if (response.status < 500) return
    } catch {
      // ainda subindo
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  throw new Error("Timeout esperando a Transportadora em localhost.")
}

async function preparePage(page) {
  await page.emulateMedia({ colorScheme: "light", reducedMotion: "no-preference" })
  await page.addInitScript(() => {
    try {
      localStorage.setItem("theme", "light")
      const dismissed = JSON.stringify({
        dismissedAt: Date.now(),
        expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
      })
      localStorage.setItem("promo:bar:maj-verao-2026-2027", dismissed)
      localStorage.setItem("promo:modal:maj-verao-2026-2027", dismissed)
    } catch {
      // storage pode falhar antes do documento
    }
    const style = document.createElement("style")
    style.textContent = `
      html { scrollbar-width: none; scroll-behavior: auto !important; }
      ::-webkit-scrollbar { display: none; }
      * { cursor: none !important; }
      nextjs-portal,
      [data-nextjs-dev-overlay],
      [data-sonner-toaster],
      a[aria-label="Solicitar orçamento no WhatsApp"] { display: none !important; }
    `
    document.documentElement.appendChild(style)
  })
}

async function scrub(page) {
  await page
    .evaluate(() => {
      document.documentElement.style.scrollBehavior = "auto"
      document.querySelectorAll("script[data-nextjs-dev-overlay], nextjs-portal").forEach((node) => node.remove())
      document.querySelector('[aria-label="Promoção"]')?.remove()
      document.querySelector('a[aria-label="Solicitar orçamento no WhatsApp"]')?.remove()
    })
    .catch(() => {})
}

async function hold(page, ms) {
  const step = 200
  let left = ms
  while (left > 0) {
    await scrub(page)
    const slice = Math.min(step, left)
    await page.waitForTimeout(slice)
    left -= slice
  }
}

async function dismissMajestadeOverlays(page) {
  const closeBar = page.getByRole("button", { name: "Fechar promoção" })
  if (await closeBar.isVisible().catch(() => false)) await closeBar.click()
  const closeModal = page.getByRole("button", { name: "Fechar" })
  if (await closeModal.isVisible().catch(() => false)) await closeModal.click()
  await scrub(page)
}

async function smoothScrollBy(page, distance, duration) {
  await page.evaluate(
    async ({ distance, duration }) => {
      const start = window.scrollY
      const t0 = performance.now()
      const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2)
      await new Promise((resolve) => {
        function frame(now) {
          const t = Math.min(1, (now - t0) / duration)
          window.scrollTo(0, start + distance * ease(t))
          if (t < 1) requestAnimationFrame(frame)
          else resolve()
        }
        requestAnimationFrame(frame)
      })
    },
    { distance, duration },
  )
}

async function smoothScrollTo(page, selector, duration) {
  const top = await page.evaluate((selector) => {
    const node = document.querySelector(selector)
    if (!node) return null
    return node.getBoundingClientRect().top + window.scrollY
  }, selector)
  if (top == null) throw new Error(`Seletor não encontrado: ${selector}`)
  const current = await page.evaluate(() => window.scrollY)
  await smoothScrollBy(page, top - current, duration)
}

async function shot(page, file) {
  await page.screenshot({ path: file, type: "png", animations: "disabled" })
}

function contextOptions(videoDir) {
  return {
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
    locale: "pt-BR",
    colorScheme: "light",
    reducedMotion: "no-preference",
    recordVideo: videoDir ? { dir: videoDir, size: { width: 1920, height: 1080 } } : undefined,
  }
}

async function clickModule(page, label) {
  const nav = page.getByRole("navigation", { name: "Módulos" })
  await nav.getByRole("link", { name: label, exact: true }).click()
}

async function jumpToMay2026(page) {
  // Seis passos sem pausa: de nov/2026 a maio/2026, onde os mocks têm fretes/frota.
  const prev = page.getByRole("button", { name: "Mês anterior" })
  for (let step = 0; step < 6; step += 1) {
    if (!(await prev.isVisible().catch(() => false))) return
    await prev.click()
  }
}

async function filmTransportadora(browser) {
  const warmup = await browser.newContext(contextOptions())
  const warmPage = await warmup.newPage()
  await preparePage(warmPage)
  await warmPage.goto(appOrigin, { waitUntil: "domcontentloaded" })
  const identifier = warmPage.locator("#login-identifier")
  const password = warmPage.locator("#login-password")
  await identifier.waitFor()
  await identifier.click()
  await identifier.fill(DEMO_EMAIL)
  await password.click()
  await password.fill(DEMO_PASSWORD)
  await warmPage.getByRole("button", { name: "Entrar" }).click()
  await warmPage.waitForURL("**/dashboard/**", { timeout: 30_000 })
  // Pré-aquece as rotas com mocks de maio para a SWR não girar spinner no filme.
  await warmPage.goto(`${appOrigin}/dashboard`, { waitUntil: "domcontentloaded" })
  await warmPage.getByRole("heading", { name: "Dashboard operacional" }).waitFor()
  await warmPage.goto(`${appOrigin}/dashboard/fretes?competencia=2026-05`, {
    waitUntil: "domcontentloaded",
  })
  await warmPage.getByText("OF-2026-0001").waitFor()
  await warmPage.goto(`${appOrigin}/dashboard/frota?competencia=2026-05`, {
    waitUntil: "domcontentloaded",
  })
  await warmPage.getByText("ABC1D23").waitFor()
  const storagePath = path.join(workDir, "transportadora-auth.json")
  await warmup.storageState({ path: storagePath })
  await warmup.close()

  const videoDir = path.join(workDir, "transportadora-video")
  await mkdir(videoDir, { recursive: true })
  const context = await browser.newContext({
    ...contextOptions(videoDir),
    storageState: storagePath,
  })
  const page = await context.newPage()
  await preparePage(page)
  const clock = Date.now()

  await page.goto(`${appOrigin}/dashboard`, { waitUntil: "domcontentloaded" })
  await page.getByRole("heading", { name: "Dashboard operacional" }).waitFor()
  await page.getByText("OF-2026-0002").waitFor()
  await scrub(page)
  const leadIn = (Date.now() - clock) / 1000

  // Dashboard curto: leitura + um scroll — sem “passeio” longo.
  await hold(page, 1100)
  await shot(page, path.join(workDir, "tm-transportadora-poster.png"))
  await smoothScrollBy(page, 260, 1100)
  await hold(page, 500)

  // Fretes (SPA) → maio/2026 em cliques rápidos → lista com dados.
  await clickModule(page, "Fretes")
  await page.getByRole("heading", { name: "Gestão de fretes" }).waitFor({ timeout: 20_000 })
  await jumpToMay2026(page)
  await page.getByText("OF-2026-0001").waitFor({ timeout: 20_000 })
  await scrub(page)
  await hold(page, 1200)
  await smoothScrollBy(page, 180, 900)
  await hold(page, 450)

  // Frota (SPA). A competência costuma seguir na URL; se não, o jump cobre.
  await clickModule(page, "Frota")
  await page.getByRole("heading", { name: "Gestão de frota" }).waitFor({ timeout: 20_000 })
  if (!(await page.getByText("ABC1D23").isVisible().catch(() => false))) {
    await jumpToMay2026(page)
  }
  await page.getByText("ABC1D23").waitFor({ timeout: 20_000 })
  await scrub(page)
  await hold(page, 1100)
  await smoothScrollBy(page, 140, 800)
  await hold(page, 400)

  // Fecha no dashboard (quadro estável para o loop).
  await clickModule(page, "Dashboard")
  await page.getByRole("heading", { name: "Dashboard operacional" }).waitFor({ timeout: 20_000 })
  await page.getByText("OF-2026-0002").waitFor({ timeout: 20_000 })
  await scrub(page)
  await hold(page, 900)

  const video = page.video()
  await context.close()
  return { raw: await video.path(), poster: path.join(workDir, "tm-transportadora-poster.png"), leadIn }
}

async function filmMajestade(browser) {
  const videoDir = path.join(workDir, "majestade-video")
  await mkdir(videoDir, { recursive: true })
  const context = await browser.newContext(contextOptions(videoDir))
  const page = await context.newPage()
  await preparePage(page)
  const clock = Date.now()

  const home = "https://majestadepersonalizados.com.br"
  await page.goto(home, { waitUntil: "domcontentloaded" })
  await page.getByRole("img", { name: "Majestade Personalizados" }).first().waitFor()
  await page.evaluate(() => document.fonts.ready)
  await dismissMajestadeOverlays(page)
  const leadIn = (Date.now() - clock) / 1000
  await hold(page, 1100)
  await shot(page, path.join(workDir, "majestade-poster.png"))
  await smoothScrollTo(page, "#diferenciais", 2400)
  await page.getByText("Produção na fábrica").waitFor()
  await hold(page, 1100)
  await smoothScrollBy(page, 220, 900)
  await hold(page, 600)
  await smoothScrollTo(page, "body", 2600)
  await hold(page, 900)

  const video = page.video()
  await context.close()
  return { raw: await video.path(), poster: path.join(workDir, "majestade-poster.png"), leadIn }
}

async function encodePair(raw, posterPng, basename, leadIn = 0) {
  const webm = path.join(outDir, `${basename}.webm`)
  const mp4 = path.join(outDir, `${basename}.mp4`)
  const webp = path.join(outDir, `${basename}.webp`)
  const avif = path.join(outDir, `${basename}.avif`)

  await encodeVideo(raw, webm, "webm", 32, leadIn)
  await encodeVideo(raw, mp4, "mp4", 20, leadIn)
  await fitUnderCap(raw, webm, "webm", leadIn)
  await fitUnderCap(raw, mp4, "mp4", leadIn)

  await run(ffmpegPath, [
    "-y",
    "-i",
    posterPng,
    "-vf",
    "scale=1600:-2",
    "-c:v",
    "libwebp",
    "-quality",
    "84",
    webp,
  ])

  try {
    await run(ffmpegPath, [
      "-y",
      "-i",
      posterPng,
      "-vf",
      "scale=1600:-2",
      "-c:v",
      "libaom-av1",
      "-still-picture",
      "1",
      "-crf",
      "28",
      avif,
    ])
  } catch (error) {
    log(`AVIF de ${basename} não saiu (${error instanceof Error ? error.message : error}). O WebP cobre o poster.`)
  }

  await report(webm)
  await report(mp4)
  await report(webp)
  await report(avif)
}

async function encodeVideo(raw, dest, kind, crf, leadIn = 0) {
  // Corte curto + leve aceleração: a prévia parece o app mais ágil do que a captura crua.
  const start = Math.max(0, leadIn).toFixed(2)
  const trim = ["-ss", start, "-t", "13"]
  const scale = ["-vf", "scale=1600:-2,fps=30,setpts=0.88*PTS"]
  if (kind === "webm") {
    await run(ffmpegPath, [
      "-y",
      "-i",
      raw,
      ...trim,
      ...scale,
      "-c:v",
      "libvpx-vp9",
      "-b:v",
      "0",
      "-crf",
      String(crf),
      "-row-mt",
      "1",
      "-deadline",
      "good",
      "-cpu-used",
      "2",
      "-an",
      dest,
    ])
    return
  }
  await run(ffmpegPath, [
    "-y",
    "-i",
    raw,
    ...trim,
    ...scale,
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    String(crf),
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    "-an",
    dest,
  ])
}

async function fitUnderCap(raw, dest, kind, leadIn = 0) {
  let size = await fileSize(dest)
  let crf = kind === "webm" ? 36 : 24
  while (size > FIVE_MB && crf <= 42) {
    log(`${path.basename(dest)} está com ${formatMb(size)}. Reencodando CRF ${crf}.`)
    await encodeVideo(raw, dest, kind, crf, leadIn)
    size = await fileSize(dest)
    crf += 4
  }
  if (size > FIVE_MB) {
    log(`${path.basename(dest)} ainda passa de 5 MB (${formatMb(size)}).`)
  } else if (size > 3 * 1024 * 1024) {
    log(`${path.basename(dest)} ficou entre 3 e 5 MB: ${formatMb(size)}.`)
  }
}

async function fileSize(file) {
  try {
    const info = await stat(file)
    return info.size
  } catch {
    return 0
  }
}

async function report(file) {
  const size = await fileSize(file)
  if (size > 0) log(`${path.basename(file)} ${formatMb(size)}`)
}

function formatMb(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

async function main() {
  if (!ffmpegPath) {
    throw new Error(
      "Binário do ffmpeg ausente. Rode: node node_modules/ffmpeg-static/install.js",
    )
  }
  await mkdir(outDir, { recursive: true })
  await rm(workDir, { recursive: true, force: true })
  await mkdir(workDir, { recursive: true })

  log("Subindo TM Transportadora com mocks em localhost.")
  const server = spawn("npm", ["run", "dev", "--", "--port", String(port)], {
    cwd: transportadoraDir,
    env: {
      ...process.env,
      NEXT_PUBLIC_USE_MOCKS: "true",
      BROWSER: "none",
    },
    shell: true,
    stdio: "inherit",
  })

  const browser = await chromium.launch({ headless: true })
  try {
    await waitForServer(appOrigin, server)
    const only = (process.env.RECORD_ONLY || "").trim().toLowerCase()
    log("Gravando TM Transportadora.")
    const transportadora = await filmTransportadora(browser)
    log("Codificando TM Transportadora.")
    await encodePair(transportadora.raw, transportadora.poster, "tm-transportadora", transportadora.leadIn)

    if (only !== "transportadora") {
      log("Gravando Majestade.")
      const majestade = await filmMajestade(browser)
      log("Codificando Majestade.")
      await encodePair(majestade.raw, majestade.poster, "majestade", majestade.leadIn)
    }
    log("Pronto.")
  } finally {
    await browser.close().catch(() => {})
    killTree(server)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
