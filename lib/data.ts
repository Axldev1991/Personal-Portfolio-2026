import { Project } from "./types";

export const PROJECTS_DATA: Project[] = [
    {
        title: "Mirgor",
        description: "Corporate platform for a leading industrial holding. Focus on micro-services and business unit management.",
        description_es: "Plataforma corporativa para un holding industrial líder. Enfoque en micro-servicios y gestión de unidades de negocio.",
        tags: ["Corporate", "Enterprise", "High Performance"],
        image: "/projects/mirgor.png",
        link: "https://mirgor.com/",
        github: "#",
    },
    {
        title: "Zeigen",
        description: "Industrial catalog with dynamic filters and optimized client-side search.",
        description_es: "Catálogo industrial con filtros dinámicos y búsqueda optimizada en el lado del cliente.",
        tags: ["Custom Dev", "Web Design", "Search Engine"],
        image: "/projects/zeigen.png",
        link: "https://zeigen.com.ar/",
        github: "#",
    },
    {
        title: "Rubicon Tech",
        description: "Landing page for software engineering with a focus on high-end visual design and modern UX.",
        description_es: "Landing page de ingeniería de software con enfoque en diseño visual premium y UX moderna.",
        tags: ["Tech", "SaaS", "UX Design"],
        image: "/projects/rubicon.png",
        link: "https://rubicontech.io/",
        github: "#",
    },
    {
        title: "CAIC",
        description: "Institutional catalog for the film industry. Features rich media handling and category filtering.",
        description_es: "Catálogo institucional para la industria cinematográfica. Manejo de media enriquecida y filtrado por categorías.",
        tags: ["Film Industry", "Media", "Catalog"],
        image: "/projects/caic.png",
        link: "https://caic-cine.org.ar/",
        github: "#",
    },
    {
        title: "UCASAL",
        description: "Institutional educational portal with complex content hierarchies and high traffic optimization.",
        description_es: "Portal educativo institucional con complejas jerarquías de contenido y optimización para alto tráfico.",
        tags: ["Education", "High Traffic", "LMS"],
        image: "/projects/ucasal.png",
        link: "https://www.ucasal.edu.ar/",
        github: "#",
    },
    {
        title: "Dogma",
        description: "High-end architecture landing page with fluid layouts and optimized image delivery.",
        description_es: "Landing page de arquitectura de alta gama con layouts fluidos y entrega de imágenes optimizada.",
        tags: ["Architecture", "Premium UX", "Design"],
        image: "/projects/dogma.png",
        link: "https://www.dogmaconstrucciones.com/",
        github: "#",
    },
    {
        title: "Frontline",
        description: "Fitness services landing page. Focused on lead generation and external CRM integration.",
        description_es: "Landing page de servicios de fitness. Foco en la captura de leads e integración con CRM externos.",
        tags: ["Fitness", "Lead Gen", "Marketing"],
        image: "/projects/frontline.png",
        link: "https://frontlineconditioning.com/",
        github: "#",
    },
    {
        title: "Lucky Feet Shoes",
        description: "E-commerce specialized in conversion funnel optimization and dynamic inventory management.",
        description_es: "E-commerce especializado en la optimización del embudo de conversión y gestión dinámica de inventario.",
        tags: ["E-commerce", "CRO", "Retail"],
        image: "/projects/luckyfeet.png",
        link: "https://luckyfeetshoes.com/",
        github: "#",
    },
];

export const getProjects = (): Project[] => {
    return PROJECTS_DATA;
};
