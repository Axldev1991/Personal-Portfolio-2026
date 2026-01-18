"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function ContactForm() {
    const { t } = useLanguage();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send");

            setStatus("success");
            const form = e.target as HTMLFormElement;
            form.reset();
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-widest ml-1">
                        {t("contact.form.name") || "Your Name_"}
                    </label>
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-colors text-foreground"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-widest ml-1">
                        {t("contact.form.email") || "Email_"}
                    </label>
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-colors text-foreground"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-muted tracking-widest ml-1">
                    {t("contact.form.message") || "Message_"}
                </label>
                <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Hello Axel, I have an interesting project for you..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full h-16 rounded-xl flex items-center justify-center gap-4 group transition-all duration-500 overflow-hidden relative ${status === "success"
                    ? "bg-accent text-black"
                    : "bg-primary text-white hover:bg-white hover:text-primary"
                    }`}
            >
                {status === "loading" ? (
                    <Loader2 className="animate-spin" />
                ) : status === "success" ? (
                    <span className="font-black uppercase tracking-widest">Message Sent!_</span>
                ) : (
                    <>
                        <span className="font-black uppercase tracking-widest">{t("contact.form.submit") || "Send Message_"}</span>
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                )}

                {/* Subtle highlight effect */}
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>

            {status === "success" && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent text-[10px] font-bold uppercase tracking-widest text-center"
                >
                    I will get back to you as soon as possible_
                </motion.p>
            )}
        </form>
    );
}
