"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, Briefcase, Mail, Github, Linkedin, Terminal } from "lucide-react";

const navLinks = [
    { name: "Main", href: "#hero", icon: Home },
    { name: "Works", href: "#projects", icon: Briefcase },
    { name: "About", href: "#about", icon: User },
    { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-20 md:w-20 lg:w-20 border-r border-border bg-background/80 backdrop-blur-md z-[100] flex flex-col items-center justify-between py-10">
            <div className="flex flex-col items-center gap-12">
                <Link href="/" className="flex flex-col items-center gap-2 group">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(51,13,242,0.4)] group-hover:scale-110 transition-transform">
                        <Terminal size={20} />
                    </div>
                </Link>

                <nav className="flex flex-col gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-muted hover:text-accent transition-colors relative group"
                        >
                            <link.icon size={24} />
                            <span className="absolute left-full ml-4 px-2 py-1 bg-secondary text-foreground text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="flex flex-col gap-6 items-center">
                <a href="#" className="text-muted hover:text-foreground transition-colors">
                    <Github size={20} />
                </a>
                <a href="#" className="text-muted hover:text-foreground transition-colors">
                    <Linkedin size={20} />
                </a>
                <div className="w-px h-12 bg-border" />
                <p className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-widest text-muted font-bold">
                    V1.0_2026
                </p>
            </div>
        </aside>
    );
}
