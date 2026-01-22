"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { ContactForm } from "./ContactForm";

export function Contact() {
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
                    </div>
                </div>
            </div>
        </section>
    );
}
