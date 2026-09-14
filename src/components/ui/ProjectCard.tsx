"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    problem: string;
    solution: string;
    myContribution: string;
    technologies: string[];
    image: string;
    github?: string;
    demo?: string;
  };
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-12 group"
    >
      <div className={cn(
        "flex flex-col lg:flex-row gap-8 lg:gap-16 items-center",
        !isEven && "lg:flex-row-reverse"
      )}>
        
        {/* Image Side */}
        <div className="w-full lg:w-3/5">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-surface-border bg-surface">
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-2/5 flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent text-sm">Project {project.id}</span>
            <div className="h-px flex-1 bg-surface-border" />
          </div>
          
          <h3 className="text-3xl font-bold text-foreground mb-6">{project.title}</h3>
          
          <div className="space-y-6 text-muted mb-8">
            <div>
              <h4 className="text-foreground text-sm font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                El Problema
              </h4>
              <p className="text-sm leading-relaxed">{project.problem}</p>
            </div>
            
            <div>
              <h4 className="text-foreground text-sm font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                La Solución
              </h4>
              <p className="text-sm leading-relaxed">{project.solution}</p>
            </div>
            
            <div>
              <h4 className="text-foreground text-sm font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Mi Contribución
              </h4>
              <p className="text-sm leading-relaxed">{project.myContribution}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-surface border border-surface-border rounded-md text-xs font-mono text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-auto">
            {project.demo && project.demo !== "#" && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-medium rounded-md hover:bg-accent hover:text-white transition-all text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Ver proyecto
              </Link>
            )}
            
            {project.github && project.github !== "#" && (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-surface border border-surface-border text-foreground font-medium rounded-md hover:bg-surface-hover hover:border-muted transition-all text-sm"
              >
                <Github className="w-4 h-4" />
                Código
              </Link>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};
