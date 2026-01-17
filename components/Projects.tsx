"use client";

import { ProjectCard } from "./ProjectCard";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A modern e-commerce solution built with Next.js and Stripe integration. Features real-time inventory and secure checkout.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
        image: "/placeholder-1.jpg",
        link: "https://example.com",
        github: "https://github.com",
    },
    {
        title: "Corporate Website",
        description: "Responsive corporate website for a financial firm. Migrated from WordPress to Next.js for better performance.",
        tags: ["Next.js", "Framer Motion", "Tailwind"],
        image: "/placeholder-2.jpg",
        link: "https://example.com",
        github: "https://github.com",
    },
    {
        title: "Legacy WordPress Portal",
        description: "Custom WordPress theme development with complex plugin integrations for a membership site.",
        tags: ["WordPress", "PHP", "SCSS", "MySQL"],
        image: "/placeholder-3.jpg",
        link: "https://example.com",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-6xl px-6 mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        A selection of my recent work in Web Development.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
