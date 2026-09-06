import type { Metadata } from "next"

import { LegalPageShell } from "@/components/legal-page-shell"
import { contactEmail } from "@/lib/site"

export const metadata: Metadata = {
  title: "Termos de Uso | The Monkeys",
  description: "Termos e condições para uso do site e serviços da The Monkeys.",
}

export default function TermsOfService() {
  return (
    <LegalPageShell title="Termos de Uso">
      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">1. Aceitação dos termos</h2>
        <p className="leading-relaxed text-gray-300">
          Ao acessar este site ou entrar em contato com a The Monkeys, você concorda com estes Termos de Uso. Se não
          concordar, recomendamos não utilizar nossos canais digitais.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">2. Serviços</h2>
        <p className="leading-relaxed text-gray-300">
          A The Monkeys oferece serviços de desenvolvimento web, automações, integrações com IA e soluções digitais
          personalizadas. Escopo, prazos, valores e entregas serão definidos em proposta ou contrato específico.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">3. Uso adequado</h2>
        <p className="mb-4 leading-relaxed text-gray-300">Você concorda em não utilizar este site para:</p>
        <ul className="ml-4 list-inside list-disc space-y-2 text-gray-300">
          <li>Enviar conteúdo ilegal, ofensivo ou fraudulento</li>
          <li>Tentar comprometer a segurança ou disponibilidade da plataforma</li>
          <li>Reproduzir materiais do site sem autorização prévia</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">4. Propriedade intelectual</h2>
        <p className="leading-relaxed text-gray-300">
          Textos, identidade visual, layout e demais conteúdos deste site pertencem à The Monkeys, salvo quando
          indicado de forma diferente ou acordado em contrato.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">5. Limitação de responsabilidade</h2>
        <p className="leading-relaxed text-gray-300">
          Empregamos boas práticas para manter o site disponível e seguro, mas não garantimos funcionamento ininterrupto.
          Informações publicadas têm caráter informativo e podem ser atualizadas sem aviso prévio.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-sans text-2xl font-bold text-primary">6. Contato</h2>
        <p className="leading-relaxed text-gray-300">
          Dúvidas sobre estes termos podem ser enviadas para{" "}
          <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
            {contactEmail}
          </a>
          .
        </p>
      </section>
    </LegalPageShell>
  )
}
