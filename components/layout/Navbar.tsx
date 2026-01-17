"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/70 border-b border-border/50"
        >
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
                Portfolio.
            </Link>

            <ul className="flex gap-6">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className="text-sm font-medium text-muted transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}
