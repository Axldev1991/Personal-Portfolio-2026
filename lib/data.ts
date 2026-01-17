import { Project } from "./types";

export const PROJECTS_DATA: Project[] = [
    {
        title: "Zeigen",
        description: "Industrial architecture and construction services platform.",
        description_es: "Plataforma de servicios de arquitectura industrial y construcción.",
        tags: ["Custom Dev", "Web Design", "Optimization"],
        link: "https://zeigen.com.ar/",
        github: "#",
    },
    {
        title: "Krossen",
        description: "Logistics and distribution solutions for the modern market.",
        description_es: "Soluciones de logística y distribución para el mercado moderno.",
        tags: ["Logistics", "B2B", "Responsive"],
        link: "https://www.krossen.com.ar/",
        github: "#",
    },
    {
        title: "Mirgor",
        description: "Large-scale industrial and technological group interface.",
        description_es: "Interfaz para un grupo industrial y tecnológico a gran escala.",
        tags: ["Corporate", "Enterprise", "High Performance"],
        link: "https://mirgor.com/",
        github: "#",
    },
    {
        title: "Rubicon Tech",
        description: "Software engineering and technical consulting landing.",
        description_es: "Landing de ingeniería de software y consultoría técnica.",
        tags: ["Tech", "SaaS", "Glassmorphism"],
        link: "https://rubicontech.io/",
        github: "#",
    },
    {
        title: "Bochain",
        description: "Blockchain technology and digital asset management platform.",
        description_es: "Plataforma de tecnología blockchain y gestión de activos digitales.",
        tags: ["Web3", "Blockchain", "Dark UI"],
        link: "https://bochain.io/",
        github: "#",
    },
];

export const getProjects = (): Project[] => {
    return PROJECTS_DATA;
};
