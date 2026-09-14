export const portfolioData = {
  personalInfo: {
    name: "Rodrigo Adrián Rosa Rivas",
    nickname: "Adrián",
    role: "Software Developer",
    subtitle: "Web & Mobile Developer • AI Enthusiast",
    location: "San Salvador, El Salvador",
    email: "bulkrosa24@gmail.com",
    github: "https://github.com/AdrianRosa21",
    githubUsername: "AdrianRosa21",
    instagram: "https://instagram.com/lowkey.adrn",
    instagramUsername: "@lowkey.adrn",
    whatsapp: "50362605704",
    cvUrl: "/cv/Rodrigo-Adrian-Rosa-Rivas-CV.pdf",
    availability: "Available for opportunities",
    heroText: "Soy desarrollador de software junior enfocado en construir aplicaciones modernas, útiles y bien diseñadas, combinando desarrollo, inteligencia artificial y una fuerte orientación a la resolución de problemas.",
    aboutText: "Soy desarrollador de software junior y estudiante de Bachillerato Técnico Vocacional en Desarrollo de Software.\n\nMe gusta convertir ideas en productos reales, desde aplicaciones web y móviles hasta soluciones con inteligencia artificial, automatización y tecnología enfocada en accesibilidad.\n\nMe caracterizo por aprender rápidamente, adaptarme a distintos entornos y buscar soluciones prácticas a los problemas.\n\nTambién considero importantes las habilidades humanas dentro del desarrollo de software."
  },
  
  images: {
    profile: "/images/profile.png",
    about: "/images/about.png",
  },

  projects: [
    {
      id: "01",
      title: "Portfolio de Ingeniero Civil",
      problem: "Un profesional de ingeniería civil necesitaba una presencia digital clara y accesible para mostrar su trabajo y captar clientes.",
      solution: "Diseñé y desarrollé una plataforma responsive para mostrar sus servicios, experiencia y facilitar el contacto directo con clientes.",
      myContribution: "Desarrollo completo desde el diseño inicial hasta el despliegue.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      image: "/images/projects/civil-portfolio.webp",
      github: "https://github.com/AdrianRosa21", // Replace with real url if exists
      demo: "https://adrianrosa21.github.io/Ing.cesar/",
      featured: true,
    },
    {
      id: "02",
      title: "Sistema de Gestión de Gimnasio",
      problem: "El gimnasio tenía procesos operativos manuales y desorganizados que dificultaban el control de usuarios y pagos.",
      solution: "Construí una aplicación web administrativa que organiza membresías, pagos, asistencia y operaciones internas.",
      myContribution: "Arquitectura backend, modelo de datos y desarrollo de endpoints utilizando .NET Core.",
      technologies: ["ASP.NET Core MVC", "C#", "Entity Framework Core", "SQL Server"],
      image: "/images/projects/gymsystem.webp",
      github: "https://github.com/AdrianRosa21",
      demo: "#",
      featured: true,
    },
    {
      id: "03",
      title: "App móvil para aprender inglés",
      problem: "Los estudiantes necesitaban una forma de continuar aprendiendo sin depender permanentemente de una conexión a Internet.",
      solution: "Desarrollé una aplicación educativa móvil con progreso persistente, funcionamiento offline y experiencia interactiva.",
      myContribution: "Desarrollo frontend móvil, persistencia local e integración de minijuegos y audio.",
      technologies: ["React Native", "Expo", "AsyncStorage", "SQLite"],
      image: "/images/projects/english-app.webp",
      github: "https://github.com/AdrianRosa21",
      demo: "#",
      featured: true,
    }
  ],

  techStack: {
    frontend: [
      "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"
    ],
    mobile: [
      "React Native", "Expo"
    ],
    backend: [
      "C#", "ASP.NET Core", "MVC", "Web API", "PHP", "Node.js"
    ],
    databases: [
      "SQL Server", "MySQL", "SQLite", "Firebase"
    ],
    backendConcepts: [
      "REST APIs", "Entity Framework Core", "LINQ", "JWT", "Repository Pattern", "Unit of Work"
    ],
    aiAndAutomation: [
      "AI API Integration", "Computer Vision", "Automation", "AI-powered features", "Python"
    ],
    tools: [
      "Git", "GitHub", "GitHub Pages", "VS Code", "Visual Studio", "IntelliJ IDEA", "NetBeans", "Figma"
    ]
  },

  achievements: [
    {
      title: "Copa Salvadoreña de Programación 2026",
      organization: "ESEN & Competitive Coding Club (C3)",
      category: "Escuelas y Colegios",
      date: "15 de agosto de 2026",
      description: "Participación destacada en la fase presencial, resolviendo problemas algorítmicos complejos bajo presión en equipo.",
      image: "/images/achievements/csp.webp"
    },
    {
      title: "Bootcamp: AI for Developers Jr.",
      organization: "Kódigo — Academia de Tecnología Creativa",
      category: "Bootcamp",
      date: "Julio 2026",
      description: "Formación intensiva en el uso y aplicación de herramientas modernas de inteligencia artificial integradas al desarrollo de software.",
      image: "/images/achievements/kodigo.webp"
    },
    {
      title: "English — Advanced coursework",
      organization: "Direct English",
      category: "Certificación / Nivel B2 CEFR (Self-assessed)",
      date: "Marzo 2026",
      description: "Desarrollo de habilidades avanzadas de comunicación en inglés, facilitando el trabajo con equipos internacionales y documentación técnica.",
      image: "/images/achievements/english.webp"
    }
  ],

  softSkills: [
    {
      name: "Communication",
      description: "Puedo explicar ideas técnicas de forma clara y trabajar con personas con diferentes perfiles."
    },
    {
      name: "Problem Solving",
      description: "Me interesa entender primero el problema antes de elegir la tecnología."
    },
    {
      name: "Adaptability",
      description: "Aprender nuevas herramientas forma parte natural de mi proceso de desarrollo."
    },
    {
      name: "Teamwork",
      description: "Creo que un buen producto no depende solamente del código, sino también de comunicación y colaboración."
    },
    {
      name: "Fast Learning",
      description: "Me adapto rápidamente a nuevos lenguajes, frameworks y entornos de trabajo."
    },
    {
      name: "Organization & Responsibility",
      description: "Planifico mis tareas y tomo responsabilidad sobre el código y los proyectos que construyo."
    }
  ],
  
  navigation: [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Logros", href: "#achievements" },
  ]
};
