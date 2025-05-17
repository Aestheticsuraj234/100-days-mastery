export const NAV_LINKS = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];


export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and secure checkout process.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Stripe API"],
    liveLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/username/ecommerce"
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "A responsive web application that helps users track their workout routines, nutrition, and fitness progress.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Chart.js", "Tailwind CSS"],
    liveLink: "https://example.com/fitness-tracker",
    githubLink: "https://github.com/username/fitness-tracker"
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "An interactive dashboard for managing tasks, projects, and team collaboration with real-time updates.",
    image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Redux", "Firebase", "Material UI"],
    liveLink: "https://example.com/task-manager",
    githubLink: "https://github.com/username/task-manager"
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A weather application that provides real-time forecasts, location-based weather data, and interactive maps.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "OpenWeather API", "Geolocation", "CSS Modules"],
    liveLink: "https://example.com/weather-app",
    githubLink: "https://github.com/username/weather-app"
  }
];

export const SKILLS = [
  {
    category: "Frontend",
    technologies: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Next.js", level: 75 }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "Firebase", level: 70 }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", level: 85 },
      { name: "Webpack", level: 70 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 65 },
      { name: "Jest", level: 75 }
    ]
  }
];


export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/username",
    icon: "Twitter"
  },
  {
    name: "Email",
    url: "mailto:email@example.com",
    icon: "Mail"
  }
];