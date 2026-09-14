"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import { GithubIcon as Github, InstagramIcon as Instagram } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";

export const Contact = () => {
  const whatsappUrl = `https://wa.me/${portfolioData.personalInfo.whatsapp}?text=Hola%20Adri%C3%A1n%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo.`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/50 border-t border-surface-border">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {portfolioData.personalInfo.availability}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6"
          >
            ¿Tienes un problema que el <br className="hidden md:block"/> software pueda resolver?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted mb-12"
          >
            Construyamos algo.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-foreground text-background font-medium rounded-md hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar mensaje
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-2xl"
          >
            <Link 
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="flex flex-col items-center gap-3 text-muted hover:text-foreground transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-surface border border-surface-border flex items-center justify-center group-hover:border-muted transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm flex items-center gap-1">
                Email
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </Link>
            
            <Link 
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 text-muted hover:text-foreground transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-surface border border-surface-border flex items-center justify-center group-hover:border-muted transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm flex items-center gap-1">
                GitHub
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </Link>
            
            <Link 
              href={portfolioData.personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 text-muted hover:text-foreground transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-surface border border-surface-border flex items-center justify-center group-hover:border-muted transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm flex items-center gap-1">
                Instagram
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
