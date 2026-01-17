"use client";

import { ProjectCard } from "@/components/ui";
import { getProjects } from "@/lib/data";

const projects = getProjects();

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-background">
            <div className="max-w-6xl px-6 mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="max-w-2xl mt-4 text-lg text-muted">
                        A selection of my recent work, focusing on performance and user experience.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
