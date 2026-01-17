"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { useContact } from "@/hooks/useContact";

export default function Contact() {
    const { contactData, handleEmailClick } = useContact();

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="max-w-4xl px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Let&apos;s Work Together
                    </h2>
                    <p className="mt-4 text-lg text-muted">
                        Have a project in mind or want to discuss modern web development? I&apos;d love to hear from you.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <button
                            onClick={handleEmailClick}
                            className="flex items-center gap-3 px-8 py-4 text-lg font-medium text-primary-foreground transition-all bg-primary rounded-xl hover:opacity-90 hover:scale-105 cursor-pointer"
                        >
                            <Mail className="w-6 h-6" /> Send me an Email
                        </button>
                    </div>

                    <div className="flex justify-center gap-8 mt-16">
                        <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground group">
                            <div className="p-4 transition-colors bg-secondary rounded-full group-hover:bg-secondary/80">
                                <Github className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">GitHub</span>
                        </a>
                        <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-primary group">
                            <div className="p-4 transition-colors bg-secondary rounded-full group-hover:bg-primary/10">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                        <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-green-600 group">
                            <div className="p-4 transition-colors bg-secondary rounded-full group-hover:bg-green-50">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">WhatsApp</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
