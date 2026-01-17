import { Project } from "./types";

export const PROJECTS_DATA: Project[] = [
    {
        title: "Mirgor",
        description: "Corporate platform for a leading industrial holding. Focus on micro-services and business unit management.",
        description_es: "Plataforma corporativa para un holding industrial líder. Enfoque en micro-servicios y gestión de unidades de negocio.",
        tags: ["Corporate", "Enterprise", "High Performance"],
        link: "https://mirgor.com/",
        github: "#",
    },
    {
        title: "Zeigen",
        description: "Industrial catalog with dynamic filters and optimized client-side search.",
        description_es: "Catálogo industrial con filtros dinámicos y búsqueda optimizada en el lado del cliente.",
        tags: ["Custom Dev", "Web Design", "Search Engine"],
        link: "https://zeigen.com.ar/",
        github: "#",
    },
    {
        title: "Bochain",
        description: "Minimalist Web3 site for tech startups with headless components and light animations.",
        description_es: "Sitio Web3 minimalista para startups tecnológicas con componentes headless y animaciones ligeras.",
        tags: ["Web3", "Blockchain", "Dark UI"],
        link: "https://bochain.io/",
        github: "#",
    },
    {
        title: "Krossen",
        description: "Industrial services site with a modular structure built for scalability and local SEO.",
        description_es: "Sitio de servicios industriales con estructura modular para escalabilidad y SEO local.",
        tags: ["Logistics", "Modular", "Industrial"],
        link: "https://www.krossen.com.ar/",
        github: "#",
    },
    {
        title: "Rubicon Tech",
        description: "Landing page for software engineering with a focus on high-end visual design and modern UX.",
        description_es: "Landing page de ingeniería de software con enfoque en diseño visual premium y UX moderna.",
        tags: ["Tech", "SaaS", "UX Design"],
        link: "https://rubicontech.io/",
        github: "#",
    },
];

export const getProjects = (): Project[] => {
    return PROJECTS_DATA;
};
