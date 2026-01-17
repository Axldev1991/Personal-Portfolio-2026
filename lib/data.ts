import { Project } from "./types";

export const PROJECTS_DATA: Project[] = [
    {
        title: "E-commerce Platform",
        description: "A full-stack online store with cart functionality and payment integration.",
        description_es: "Una tienda online full-stack con funcionalidad de carrito e integración de pagos.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
        link: "#",
        github: "#",
    },
    {
        title: "Portfolio Website",
        description: "A minimalist, animated portfolio built with modularity in mind.",
        description_es: "Un portfolio minimalista y animado construido con la modularidad en mente.",
        tags: ["Next.js", "Framer Motion", "Tailwind"],
        link: "#",
        github: "#",
    },
    {
        title: "Weather App",
        description: "Real-time weather data visualization with search functionality.",
        description_es: "Visualización de datos meteorológicos en tiempo real con funcionalidad de búsqueda.",
        tags: ["React", "OpenWeather API", "CSS Modules"],
        link: "#",
        github: "#",
    },
];

export const getProjects = (): Project[] => {
    return PROJECTS_DATA;
};
