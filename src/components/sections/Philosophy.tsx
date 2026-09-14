"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const steps = [
  { id: "01", label: "Understand", desc: "Comprender el problema real antes de escribir código." },
  { id: "02", label: "Design", desc: "Diseñar la arquitectura, datos y experiencia." },
  { id: "03", label: "Build", desc: "Desarrollar la solución utilizando la tecnología adecuada." },
  { id: "04", label: "Improve", desc: "Iterar, optimizar y asegurar calidad a largo plazo." },
];

export const Philosophy = () => {
  return (
    <section className="py-24 bg-surface border-y border-surface-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-medium tracking-tight text-foreground leading-snug"
          >
            &quot;No se trata solamente de escribir código. Se trata de entender un problema y construir una solución que funcione.&quot;
          </motion.h3>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-3 md:gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm md:text-base text-accent">{step.id}</span>
                  <div className="h-px w-12 md:w-16 bg-surface-border group-hover:bg-accent transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">{step.label}</h4>
                  <p className="text-sm md:text-base text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex text-surface-border">
                  <ArrowDown className="w-5 h-5 -rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
