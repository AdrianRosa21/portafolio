"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export const SoftSkills = () => {
  return (
    <section className="py-24 md:py-32 bg-surface/30 border-y border-surface-border">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          number="05" 
          title="Soft Skills" 
          subtitle="Porque un buen producto no se construye solo con código."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-xl bg-surface border border-surface-border hover:border-accent/50 transition-colors flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold text-foreground">{skill.name}</h3>
              <p className="text-muted leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
