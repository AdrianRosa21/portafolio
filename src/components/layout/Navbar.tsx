"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon as Github, InstagramIcon as Instagram } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-surface-border shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative z-50 font-bold text-xl tracking-tighter">
          <span className="text-foreground transition-colors group-hover:text-accent">
            Rodrigo Rosa
          </span>
          <span className="hidden sm:inline text-muted font-normal ml-2">/ RR</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {portfolioData.navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <Link
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={portfolioData.personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 bg-foreground text-background font-medium rounded-md hover:bg-accent hover:text-white transition-all text-sm ml-2"
            >
              Hablemos
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col pt-24 px-6 pb-6 md:hidden h-screen"
            >
              <ul className="flex flex-col gap-6 text-xl font-medium mb-8">
                {portfolioData.navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-muted hover:text-accent transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <div className="flex items-center gap-6 mb-8">
                  <Link
                    href={portfolioData.personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link
                    href={portfolioData.personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                </div>
                
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 text-center bg-foreground text-background font-medium rounded-md hover:bg-accent hover:text-white transition-all"
                >
                  Hablemos
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
