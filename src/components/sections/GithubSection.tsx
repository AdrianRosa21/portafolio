"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";

export const GithubSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-surface-border bg-surface p-8 md:p-16 flex flex-col items-center text-center group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background/0 to-background/0 pointer-events-none" />
          
          <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-8 border border-surface-border group-hover:border-accent transition-colors">
            <Github className="w-8 h-8 text-foreground group-hover:text-accent transition-colors" />
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Building, learning and shipping <br className="hidden md:block" />
            <span className="text-muted">one project at a time.</span>
          </h3>
          
          <Link 
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-accent hover:text-white transition-all mt-4"
          >
            View GitHub
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <p className="mt-6 font-mono text-sm text-muted">
            {portfolioData.personalInfo.githubUsername}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
