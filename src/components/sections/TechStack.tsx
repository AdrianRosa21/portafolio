"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const TechStack = () => {
  const groups = [
    {
      title: "🌐 Web & Frontend",
      badges: [
        { name: "React", url: "https://img.shields.io/badge/-REACT-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
        { name: "Next.js", url: "https://img.shields.io/badge/-NEXT.JS-000000?style=for-the-badge&logo=next.js&logoColor=white" },
        { name: "TypeScript", url: "https://img.shields.io/badge/-TYPESCRIPT-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
        { name: "JavaScript", url: "https://img.shields.io/badge/-JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
        { name: "HTML5", url: "https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
        { name: "CSS3", url: "https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" }
      ]
    },
    {
      title: "📱 Mobile",
      badges: [
        { name: "React Native", url: "https://img.shields.io/badge/-REACT%20NATIVE-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
        { name: "Kotlin", url: "https://img.shields.io/badge/-KOTLIN-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" },
        { name: "Flutter", url: "https://img.shields.io/badge/-FLUTTER-02569B?style=for-the-badge&logo=flutter&logoColor=white" }
      ]
    },
    {
      title: "⚙️ Backend & Data",
      badges: [
        { name: "Node.js", url: "https://img.shields.io/badge/-NODE.JS-339933?style=for-the-badge&logo=node.js&logoColor=white" },
        { name: "Python", url: "https://img.shields.io/badge/-PYTHON-14354C?style=for-the-badge&logo=python&logoColor=white" },
        { name: "PHP", url: "https://img.shields.io/badge/-PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" },
        { name: "C#", url: "https://img.shields.io/badge/-C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" },
        { name: "MySQL", url: "https://img.shields.io/badge/-MYSQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" },
        { name: "Firebase", url: "https://img.shields.io/badge/-FIREBASE-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" }
      ]
    },
    {
      title: "🛠️ Herramientas & DevOps",
      badges: [
        { name: "Git", url: "https://img.shields.io/badge/-GIT-F05032?style=for-the-badge&logo=git&logoColor=white" },
        { name: "Vercel", url: "https://img.shields.io/badge/-VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white" },
        { name: "Vitest", url: "https://img.shields.io/badge/-VITEST-729B1B?style=for-the-badge&logo=vitest&logoColor=white" },
        { name: "Postman", url: "https://img.shields.io/badge/-POSTMAN-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
        { name: "VS Code", url: "https://img.shields.io/badge/-VS%20CODE-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white" },
        { name: "Figma", url: "https://img.shields.io/badge/-FIGMA-F24E1E?style=for-the-badge&logo=figma&logoColor=white" }
      ]
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
        
        <div className="flex flex-col items-center gap-16 md:gap-24 mt-16 max-w-4xl mx-auto">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center w-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {group.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {group.badges.map(badge => (
                  <img 
                    key={badge.name} 
                    src={badge.url} 
                    alt={badge.name}
                    className="h-10 md:h-12 hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
