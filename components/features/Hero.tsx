"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-16 text-center bg-surface">
            <div className="max-w-4xl space-y-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl"
                >
                    Creating Digital Experiences{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        That Matter.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="max-w-2xl mx-auto text-xl text-muted"
                >
                    I&apos;m a Web Developer specializing in Next.js and modern web technologies.
                    Turning ideas into fast, responsive, and beautiful websites.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="flex items-center gap-2 px-8 py-3 text-lg font-medium text-primary-foreground transition-all bg-primary rounded-full hover:opacity-90 hover:scale-105 active:scale-95"
                    >
                        View My Work <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 text-lg font-medium text-foreground transition-all bg-background border border-border rounded-full hover:bg-surface hover:scale-105 active:scale-95 shadow-sm"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
