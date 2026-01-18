"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, ArrowRight } from "lucide-react";
import { useContact } from "@/hooks/useContact";
import { useLanguage } from "@/hooks/useLanguage";
import { ContactForm } from "./ContactForm";

export function Contact() {
    const { contactData, handleEmailClick } = useContact();
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-40 bg-background border-t border-accent">
            <div className="max-w-6xl px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-8xl font-black uppercase leading-none"
                        >
                            {t("contact.title")}<br />
                            <span className="text-primary italic">{t("contact.subtitle")}</span>
                        </motion.h2>

                        <div className="space-y-8">
                            <p className="text-xl text-muted font-light max-w-sm">
                                {t("contact.bio")}
                            </p>

                            <div className="flex gap-12">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase font-bold text-muted tracking-widest">{t("contact.availability")}</p>
                                    <p className="text-accent underline font-black">OPEN_FOR_WORK</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase font-bold text-muted tracking-widest">{t("contact.location")}</p>
                                    <p className="text-foreground font-black">BUENOS AIRES, ARG</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start gap-12">
                        <ContactForm />

                        <div className="space-y-6 w-full">
                            <button
                                onClick={handleEmailClick}
                                className="group text-sm md:text-xl font-bold border-b border-primary/30 pb-2 hover:text-accent hover:border-accent transition-all break-all text-left opacity-60 hover:opacity-100"
                            >
                                {t("contact.btn")}{contactData.email.toLowerCase()}
                            </button>

                            <div className="flex flex-wrap gap-4 w-full">
                                <SocialLink icon={Github} label="GitHub" href={contactData.github} color="hover:border-white/40" />
                                <SocialLink icon={Linkedin} label="LinkedIn" href={contactData.linkedin} color="hover:border-primary/40" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ icon: Icon, label, href, color }: { icon: any, label: string, href: string, color: string }) {
    return (
        <a
            href={href}
            className={`flex-1 min-w-[140px] glass-card p-6 rounded-2xl flex flex-col gap-4 group transition-all ${color}`}
        >
            <div className="flex justify-between items-start">
                <Icon size={20} className="text-muted group-hover:text-foreground transition-colors" />
                <ArrowRight size={16} className="text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="font-black text-sm uppercase tracking-widest">{label}</p>
        </a>
    );
}
