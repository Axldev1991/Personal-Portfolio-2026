"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    en: {
        "nav.main": "Main",
        "nav.works": "Works",
        "nav.about": "About",
        "nav.contact": "Contact",
        "hero.role": "Web Developer & WordPress Architect",
        "hero.title1": "Creative",
        "hero.title2": "Developer",
        "hero.title3": "Digital_Solutions",
        "hero.bio": "Over 5 years crafting custom digital experiences. Specializing in high-performance websites and bespoke WordPress ecosystems.",
        "hero.cta": "Start a Project",
        "hero.cv": "Download CV_",
        "projects.title": "Selected Works",
        "projects.subtitle": "Productions_",
        "projects.stage": "2026_STAGE_01",
        "about.title": "Trajectory_",
        "about.subtitle": "Experience",
        "about.bio": "I bridge the gap between complex functionality and seamless design. With a focus on performance and conversion, I build tools that help businesses scale.",
        "about.stack": "Expertise",
        "contact.title": "READY_TO",
        "contact.subtitle": "BUILD_SOMETHING?",
        "contact.bio": "Looking for a custom solution? Let's discuss your next digital venture.",
        "contact.availability": "Availability",
        "contact.location": "Location",
        "contact.btn": "GET_IN_TOUCH@",
        "contact.form.name": "Your Name_",
        "contact.form.email": "Email_",
        "contact.form.message": "Message_",
        "contact.form.submit": "Send Message_",
    },
    es: {
        "nav.main": "Inicio",
        "nav.works": "Proyectos",
        "nav.about": "Bio",
        "nav.contact": "Contacto",
        "hero.role": "Desarrollador Web y Arquitecto WordPress",
        "hero.title1": "Desarrollo",
        "hero.title2": "Creativo",
        "hero.title3": "Soluciones_Digitales",
        "hero.bio": "Más de 5 años creando experiencias digitales a medida. Especializado en sitios de alto rendimiento y ecosistemas WordPress personalizados.",
        "hero.cta": "Iniciar Proyecto",
        "hero.cv": "Descargar CV_",
        "projects.title": "Sitios Destacados",
        "projects.subtitle": "Producciones_",
        "projects.stage": "2026_ETAPA_01",
        "about.title": "Trayectoria_",
        "about.subtitle": "Experiencia",
        "about.bio": "Conecto la funcionalidad compleja con un diseño impecable. Enfocado en el rendimiento y la conversión, construyo herramientas que ayudan a escalar negocios.",
        "about.stack": "Especialidades",
        "contact.title": "LISTO_PARA",
        "contact.subtitle": "¿CONSTRUIR_ALGO?",
        "contact.bio": "¿Buscas una solución a medida? Hablemos de tu próximo proyecto digital.",
        "contact.availability": "Disponibilidad",
        "contact.location": "Ubicación",
        "contact.btn": "CONTACTAR@",
        "contact.form.name": "Tu Nombre_",
        "contact.form.email": "Email_",
        "contact.form.message": "Mensaje_",
        "contact.form.submit": "Enviar Mensaje_",
    }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    const t = (key: string) => {
        return (translations[language] as any)[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
