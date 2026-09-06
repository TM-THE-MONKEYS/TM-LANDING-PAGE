import type { Metadata } from "next"

import { LegalPageShell } from "@/components/legal-page-shell"
import { contactEmail } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de Privacidade | The Monkeys",
  description: "Como a The Monkeys coleta, usa e protege seus dados.",
}

export default function PrivacyPolicy() {
  return (
    <LegalPageShell title="Política de Privacidade">
      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">1. Informações que coletamos</h2>
        <p className="mb-4 leading-relaxed text-gray-300">
          A The Monkeys pode coletar dados fornecidos voluntariamente por você, como nome, e-mail, telefone e mensagens
          enviadas por formulários, WhatsApp ou outros canais de contato.
        </p>
        <ul className="ml-4 list-inside list-disc space-y-2 text-gray-300">
          <li>Dados de contato enviados por você</li>
          <li>Informações sobre o projeto ou necessidade do seu negócio</li>
          <li>Dados técnicos básicos de navegação, como páginas visitadas e tipo de dispositivo</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">2. Como usamos os dados</h2>
        <p className="mb-4 leading-relaxed text-gray-300">Utilizamos as informações para:</p>
        <ul className="ml-4 list-inside list-disc space-y-2 text-gray-300">
          <li>Responder solicitações e prestar atendimento comercial</li>
          <li>Elaborar propostas, orçamentos e acompanhar projetos</li>
          <li>Melhorar nossos serviços, site e experiência de navegação</li>
          <li>Cumprir obrigações legais e regulatórias</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">3. Compartilhamento</h2>
        <p className="leading-relaxed text-gray-300">
          Não vendemos seus dados. Podemos compartilhá-los apenas com prestadores essenciais à operação do site e dos
          nossos serviços, sempre com medidas de segurança adequadas, ou quando exigido por lei.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">4. Seus direitos</h2>
        <p className="mb-4 leading-relaxed text-gray-300">
          Você pode solicitar acesso, correção, exclusão ou informações sobre o tratamento dos seus dados pessoais,
          conforme a legislação aplicável.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">5. Contato</h2>
        <p className="leading-relaxed text-gray-300">
          Para dúvidas sobre esta política, entre em contato pelo e-mail{" "}
          <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
            {contactEmail}
          </a>
          .
        </p>
      </section>
    </LegalPageShell>
  )
}
