"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getProjects } from "@/lib/data";
import { Project } from "@/lib/types";
import { useLanguage } from "@/hooks/useLanguage";

export function Projects() {
    const { t, language } = useLanguage();
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
                        {t("projects.title")}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase">
                        {t("projects.subtitle")}
                    </h2>
                </div>

                <div className="flex flex-col border-t border-border">
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={project.title}
                            project={project}
                            language={language}
                            onHover={() => setHoveredIndex(index)}
                            onLeave={() => setHoveredIndex(null)}
                            stageLabel={t("projects.stage")}
                        />
                    ))}
                </div>
            </div>

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
                        <div className="w-full h-full bg-secondary relative border border-white/10 shadow-2xl overflow-hidden rounded-xl">
                            {projects[hoveredIndex].image ? (
                                <img
                                    src={projects[hoveredIndex].image}
                                    alt={projects[hoveredIndex].title}
                                    className="w-full h-full object-cover object-top"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted font-mono text-xs italic">
                                    PREVIEW_NOT_READY
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function ProjectItem({ project, language, onHover, onLeave, stageLabel }: { project: Project, language: string, onHover: () => void, onLeave: () => void, stageLabel: string }) {
    const description = language === "es" && project.description_es ? project.description_es : project.description;

    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-border cursor-pointer hover:bg-surface/50 transition-colors px-0 md:px-4 gap-6"
        >
            <div className="flex flex-col gap-2 w-full">
                <span className="text-muted font-mono text-[10px] md:text-xs tracking-widest uppercase">{stageLabel}</span>
                <h3 className="text-3xl md:text-6xl font-bold md:group-hover:translate-x-6 transition-transform duration-500 uppercase tracking-tighter">
                    {project.title}
                </h3>
                <p className="text-muted text-sm max-w-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    {description}
                </p>
                <div className="flex md:hidden gap-2 mt-2">
                    {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-secondary rounded text-muted uppercase font-bold">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between w-full md:w-auto gap-10">
                <div className="hidden md:flex gap-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded text-muted uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="size-12 md:size-16 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all md:group-hover:rotate-45">
                    <ArrowUpRight size={24} className="md:w-8 md:h-8" />
                </div>
            </div>
        </motion.div>
    );
}
