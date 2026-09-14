"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="01" title="Sobre mí" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="text-lg md:text-xl lg:text-[1.35rem] leading-relaxed text-muted font-light space-y-6">
              {portfolioData.personalInfo.aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 lg:pl-10"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-surface-border">
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay z-10" />
              <Image
                src={portfolioData.images.about}
                alt="Rodrigo Adrián Rosa Rivas"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-surface border border-surface-border rounded-md text-xs font-mono text-muted">
                San Salvador, SV
              </span>
              <span className="px-3 py-1 bg-surface border border-surface-border rounded-md text-xs font-mono text-muted">
                Software Development
              </span>
              <span className="px-3 py-1 bg-surface border border-surface-border rounded-md text-xs font-mono text-muted">
                AI Enthusiast
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
