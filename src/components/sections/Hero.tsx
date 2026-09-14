"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <motion.div 
          className="flex-1 flex flex-col items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-surface-border bg-surface/50 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              {portfolioData.personalInfo.availability}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight mb-6"
          >
            Hey, soy <span className="text-accent">{portfolioData.personalInfo.nickname}</span>.<br />
            Desarrollo software que convierte problemas reales en soluciones digitales.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl mb-8 leading-relaxed"
          >
            {portfolioData.personalInfo.subtitle} — {portfolioData.personalInfo.heroText}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-medium rounded-md hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              Ver proyectos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-surface border border-surface-border text-foreground font-medium rounded-md hover:bg-surface-hover hover:border-muted transition-all flex items-center justify-center gap-2"
            >
              Contactarme
            </Link>

            <Link 
              href={portfolioData.personalInfo.cvUrl} 
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 text-muted hover:text-foreground font-medium transition-colors flex items-center justify-center gap-2 group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              CV
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center gap-2 text-sm text-muted font-mono"
          >
            <MapPin className="w-4 h-4" />
            Based in {portfolioData.personalInfo.location}
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative w-full max-w-md lg:w-1/2 aspect-square rounded-2xl overflow-hidden border border-surface-border"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
          <Image
            src={portfolioData.images.profile}
            alt={portfolioData.personalInfo.name}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

      </div>
    </section>
  );
};
