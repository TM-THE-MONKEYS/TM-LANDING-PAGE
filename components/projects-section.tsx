import { Button } from "@/components/ui/button"
import { ProjectPreview } from "@/components/project-preview"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
  return (
    <section id="projetos" className="relative overflow-hidden bg-background px-6 py-24 text-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Projetos</p>
          <h2 className="font-sans text-3xl font-bold sm:text-5xl">Dois sistemas no ar.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Um painel que roda a operação de uma transportadora e um site que vende brindes.
            Os dois foram desenhados, construídos e colocados no ar por nós.
          </p>
        </div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {projects.map((project, index) => (
            <article
              key={project.id}
              aria-labelledby={`${project.id}-title`}
              className={cn(
                "grid items-center gap-8 lg:gap-14",
                index % 2 === 1
                  ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]"
                  : "lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]",
              )}
            >
              <div className={cn(index % 2 === 1 && "lg:order-2")}>
                <ProjectPreview
                  name={project.name}
                  domain={project.domain}
                  webmSrc={project.media.webm}
                  mp4Src={project.media.mp4}
                  posterSrc={project.media.poster}
                  posterAvifSrc={project.media.posterAvif}
                />
              </div>

              <div className={cn(index % 2 === 1 && "lg:order-1")}>
                <h3 id={`${project.id}-title`} className="font-sans text-3xl font-bold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-8 text-muted-foreground">{project.description}</p>
                <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                  {project.technologies.join(", ")}
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90"
                  >
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver projeto ${project.name}`}
                    >
                      Ver projeto
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
