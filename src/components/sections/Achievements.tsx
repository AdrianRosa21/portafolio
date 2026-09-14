"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Calendar, Award } from "lucide-react";

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          number="04" 
          title="Beyond the Code" 
          subtitle="Milestones, formación y retos que han aportado a mi desarrollo profesional."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col rounded-xl border border-surface-border overflow-hidden bg-surface group"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-mono text-accent mb-3">
                  <Award className="w-4 h-4" />
                  <span>{item.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-foreground/80 font-medium mb-4">
                  {item.organization}
                </p>
                
                <p className="text-sm text-muted mb-6 flex-1">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-muted mt-auto pt-4 border-t border-surface-border">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
