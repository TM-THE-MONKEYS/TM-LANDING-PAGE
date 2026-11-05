"use client"

import { Pause, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type ProjectPreviewProps = {
  name: string
  domain: string
  webmSrc: string
  mp4Src: string
  posterSrc: string
  posterAvifSrc?: string
}

type MotionPreference = "unknown" | "ok" | "reduce"

export function ProjectPreview({
  name,
  domain,
  webmSrc,
  mp4Src,
  posterSrc,
  posterAvifSrc,
}: ProjectPreviewProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [motion, setMotion] = useState<MotionPreference>("unknown")
  const [near, setNear] = useState(false)
  const [inView, setInView] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [started, setStarted] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setMotion(media.matches ? "reduce" : "ok")
    apply()
    media.addEventListener("change", apply)
    return () => media.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    const node = rootRef.current
    if (!node) return

    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setNear(true)
      },
      { rootMargin: "240px 0px", threshold: 0 },
    )
    const viewObserver = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry?.intersectionRatio ?? 0
        setInView(ratio >= 0.5)
      },
      { threshold: Array.from({ length: 21 }, (_, step) => step / 20) },
    )

    nearObserver.observe(node)
    viewObserver.observe(node)
    return () => {
      nearObserver.disconnect()
      viewObserver.disconnect()
    }
  }, [])

  const allowAutoplay = motion === "ok"
  const mountVideo = near && (allowAutoplay || started)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !mountVideo) return

    if (!inView) {
      video.pause()
      setPlaying(false)
      return
    }

    if (motion === "reduce" && !started) return
    if (userPaused) return

    let cancelled = false
    video
      .play()
      .then(() => {
        if (!cancelled) setPlaying(true)
      })
      .catch(() => {
        if (!cancelled) setPlaying(false)
      })

    return () => {
      cancelled = true
    }
  }, [inView, mountVideo, motion, started, userPaused])

  function togglePlayback() {
    const video = videoRef.current
    if (motion === "reduce" && !started) {
      setStarted(true)
      setUserPaused(false)
      return
    }
    if (!video) return

    if (video.paused) {
      setUserPaused(false)
      setStarted(true)
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
      return
    }

    setUserPaused(true)
    video.pause()
    setPlaying(false)
  }

  const controlLabel = playing ? `Pausar prévia de ${name}` : `Reproduzir prévia de ${name}`

  return (
    <div ref={rootRef} className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center gap-3 border-b border-border bg-muted px-3 py-2">
        <span className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-foreground/25" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/10" />
        </span>
        <p className="min-w-0 flex-1 truncate text-center font-sans text-xs text-muted-foreground">{domain}</p>
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={controlLabel}
          aria-pressed={playing}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-foreground outline-none transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-ring"
        >
          {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
        </button>
      </div>

      <div className="relative aspect-video bg-muted">
        {mountVideo ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-contain"
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
            aria-label={`Prévia em vídeo de ${name}`}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={webmSrc} type="video/webm" />
            <source src={mp4Src} type="video/mp4" />
          </video>
        ) : (
          <picture>
            {posterAvifSrc ? <source srcSet={posterAvifSrc} type="image/avif" /> : null}
            <img
              src={posterSrc}
              alt={`Tela de ${name}`}
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </picture>
        )}
      </div>
    </div>
  )
}
