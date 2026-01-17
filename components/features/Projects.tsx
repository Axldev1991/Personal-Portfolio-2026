"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getProjects } from "@/lib/data";
import { Project } from "@/lib/types";

export function Projects() {
    const projects = getProjects();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="projects" className="py-40 bg-background relative">
            <div className="max-w-6xl px-6 mx-auto">
                <div className="flex flex-col mb-20 gap-4">
                    <span className="text-accent font-mono text-sm tracking-widest uppercase">
                        Selected Works
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase">
                        Productions_
                    </h2>
                </div>

                <div className="flex flex-col border-t border-border">
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={project.title}
                            project={project}
                            onHover={() => setHoveredIndex(index)}
                            onLeave={() => setHoveredIndex(null)}
                        />
                    ))}
                </div>
            </div>

            {/* Premium Hover Preview (V3 style) */}
            <AnimatePresence>
                {hoveredIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 2,
                            x: mousePos.x + 20,
                            y: mousePos.y - 120
                        }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        className="fixed top-0 left-0 w-[400px] aspect-video z-[50] pointer-events-none overflow-hidden rounded-xl glass-card hidden lg:block"
                    >
                        <div className="w-full h-full bg-secondary flex items-center justify-center text-muted font-mono text-xs italic">
                            {/* In a real project, this would be <Image /> */}
                            IMAGE_PREVIEW_{projects[hoveredIndex].title.toUpperCase().replace(/\s+/g, "_")}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function ProjectItem({ project, onHover, onLeave }: { project: Project, onHover: () => void, onLeave: () => void }) {
    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="group flex items-center justify-between py-12 border-b border-border cursor-pointer hover:bg-surface/50 transition-colors px-4"
        >
            <div className="flex flex-col gap-2">
                <span className="text-muted font-mono text-xs">2026_STAGE_01</span>
                <h3 className="text-4xl md:text-6xl font-bold group-hover:translate-x-6 transition-transform duration-500">
                    {project.title}
                </h3>
            </div>

            <div className="flex items-center gap-10">
                <div className="hidden md:flex gap-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded text-muted uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="size-16 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all group-hover:rotate-45">
                    <ArrowUpRight size={32} />
                </div>
            </div>
        </motion.div>
    );
}
