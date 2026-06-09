import type { Metadata } from "next"

import { LegalPageShell } from "@/components/legal-page-shell"
import { contactEmail } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de Cookies | The Monkeys",
  description: "Entenda como a The Monkeys utiliza cookies e tecnologias similares.",
}

export default function CookiePolicy() {
  return (
    <LegalPageShell title="Política de Cookies">
      <section>
        <h2 className="mb-4 font-orbitron text-2xl font-bold text-cyan-300">1. O que são cookies</h2>
        <p className="leading-relaxed text-gray-300">
          Cookies são pequenos arquivos armazenados no seu navegador para lembrar preferências, melhorar a navegação e
          entender como o site é utilizado.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-orbitron text-2xl font-bold text-cyan-300">2. Tipos de cookies que usamos</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Essenciais</h3>
            <p className="leading-relaxed text-gray-300">
              Necessários para o funcionamento básico do site e para recursos fundamentais de navegação.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Analíticos</h3>
            <p className="leading-relaxed text-gray-300">
              Ajudam a medir visitas, páginas mais acessadas e desempenho geral do site, de forma agregada.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">Funcionais</h3>
            <p className="leading-relaxed text-gray-300">
              Permitem lembrar preferências e melhorar a experiência durante a navegação.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-orbitron text-2xl font-bold text-cyan-300">3. Cookies de terceiros</h2>
        <p className="leading-relaxed text-gray-300">
          Podemos utilizar ferramentas de terceiros, como serviços de analytics, que definem cookies conforme suas
          próprias políticas de privacidade.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-orbitron text-2xl font-bold text-cyan-300">4. Como gerenciar cookies</h2>
        <p className="mb-4 leading-relaxed text-gray-300">
          Você pode bloquear, remover ou limitar cookies nas configurações do seu navegador. A desativação de alguns
          cookies pode afetar partes da experiência no site.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-orbitron text-2xl font-bold text-cyan-300">5. Contato</h2>
        <p className="leading-relaxed text-gray-300">
          Em caso de dúvidas sobre cookies, fale conosco em{" "}
          <a href={`mailto:${contactEmail}`} className="text-cyan-300 hover:underline">
            {contactEmail}
          </a>
          .
        </p>
      </section>
    </LegalPageShell>
  )
}
