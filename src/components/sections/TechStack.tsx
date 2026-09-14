"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Code2, Server, Database, BrainCircuit, Wrench, Smartphone } from "lucide-react";

export const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-5 h-5" />,
      items: portfolioData.techStack.frontend
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-5 h-5" />,
      items: portfolioData.techStack.mobile
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      items: portfolioData.techStack.backend
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      items: portfolioData.techStack.databases
    },
    {
      title: "Backend Concepts",
      icon: <Server className="w-5 h-5 text-muted" />,
      items: portfolioData.techStack.backendConcepts
    },
    {
      title: "AI & Automation",
      icon: <BrainCircuit className="w-5 h-5" />,
      items: portfolioData.techStack.aiAndAutomation
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      items: portfolioData.techStack.tools
    }
  ];

  return (
    <section id="stack" className="py-24 md:py-32 bg-surface/30 border-y border-surface-border">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          number="03" 
          title="Tech Stack" 
          subtitle="Herramientas y tecnologías que utilizo para construir soluciones."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-surface-border bg-background/50 backdrop-blur-sm hover:border-muted transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-surface rounded-lg border border-surface-border text-accent">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map(item => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 bg-surface border border-surface-border rounded-md text-sm text-muted hover:text-foreground hover:border-accent/50 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
