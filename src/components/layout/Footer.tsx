import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon as Github, InstagramIcon as Instagram } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border py-12 bg-background mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg font-bold text-foreground">
            {portfolioData.personalInfo.name}
          </h2>
          <p className="text-muted text-sm mt-1">
            {portfolioData.personalInfo.role}
          </p>
          <p className="text-muted text-sm mt-4 font-mono text-xs opacity-75">
            Code. Build. Learn. Repeat.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
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
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-muted text-xs">
            © {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};
