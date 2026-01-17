"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-4xl px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Let&apos;s Work Together
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Have a project in mind or want to discuss modern web development? I&apos;d love to hear from you.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <a
                            href="mailto:contact@example.com"
                            className="flex items-center gap-3 px-8 py-4 text-lg font-medium text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700 hover:scale-105"
                        >
                            <Mail className="w-6 h-6" /> Send me an Email
                        </a>
                    </div>

                    <div className="flex justify-center gap-8 mt-16">
                        <a href="#" className="flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-black group">
                            <div className="p-4 transition-colors bg-gray-100 rounded-full group-hover:bg-gray-200">
                                <Github className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">GitHub</span>
                        </a>
                        <a href="#" className="flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-blue-600 group">
                            <div className="p-4 transition-colors bg-gray-100 rounded-full group-hover:bg-blue-50">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                        <a href="#" className="flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-green-600 group">
                            <div className="p-4 transition-colors bg-gray-100 rounded-full group-hover:bg-green-50">
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
