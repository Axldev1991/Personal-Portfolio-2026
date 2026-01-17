"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image?: string; // Made optional for now since we use placeholder
    link?: string;
    github?: string;
    index: number;
}

export function ProjectCard({ title, description, tags, link, github, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
        >
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                {/* Placeholder for project image - distinct background for demo */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gradient-to-br from-gray-100 to-gray-200">
                    <span className="text-4xl">🖼️</span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="mt-2 text-gray-600 line-clamp-2">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-6">
                    {link && (
                        <Link href={link} target="_blank" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black hover:underline">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                        </Link>
                    )}
                    {github && (
                        <Link href={github} target="_blank" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black hover:underline">
                            <Github className="w-4 h-4" /> Code
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
