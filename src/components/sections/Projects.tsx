import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { portfolioData } from "@/data/portfolio";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          number="02" 
          title="Featured Work" 
          subtitle="Proyectos destacados donde aplico tecnología para resolver problemas del mundo real."
        />
        
        <div className="flex flex-col gap-32">
          {portfolioData.projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
