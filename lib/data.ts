import { Project } from "./types";

export const PROJECTS_DATA: Project[] = [
    {
        title: "E-commerce Platform",
        description: "A full-stack online store with cart functionality and payment integration.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
        link: "#",
        github: "#",
    },
    {
        title: "Portfolio Website",
        description: "A minimalist, animated portfolio built with modularity in mind.",
        tags: ["Next.js", "Framer Motion", "Tailwind"],
        link: "#",
        github: "#",
    },
    {
        title: "Weather App",
        description: "Real-time weather data visualization with search functionality.",
        tags: ["React", "OpenWeather API", "CSS Modules"],
        link: "#",
        github: "#",
    },
];

export const getProjects = (): Project[] => {
    // In the future, this could fetch from a CMS, database (JSON, WP API, etc.)
    return PROJECTS_DATA;
};
