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
        "hero.role": "Front-End Architect & Creative Technologist",
        "hero.title1": "Digital",
        "hero.title2": "Architect",
        "hero.title3": "Front-end_",
        "hero.bio": "Building interfaces that break the conventional flow. Specializing in experimental UX and high-performance applications.",
        "hero.cta": "Initiate Project",
        "projects.title": "Selected Works",
        "projects.subtitle": "Productions_",
        "projects.stage": "2026_STAGE_01",
        "about.title": "Experience_",
        "about.subtitle": "Trajectory",
        "about.bio": "I create digital experiences that matter. My journey started with a simple vision: to bridge the gap between complex engineering and human-centered design.",
        "about.stack": "Core Stack",
        "contact.title": "READY_TO",
        "contact.subtitle": "COLLABORATE?",
        "contact.bio": "Always looking for bold projects and creative engineering challenges.",
        "contact.availability": "Availability",
        "contact.location": "Location",
        "contact.btn": "HELLO@",
    },
    es: {
        "nav.main": "Inicio",
        "nav.works": "Proyectos",
        "nav.about": "Sobre mí",
        "nav.contact": "Contacto",
        "hero.role": "Arquitecto Front-End y Tecnólogo Creativo",
        "hero.title1": "Arquitecto",
        "hero.title2": "Digital",
        "hero.title3": "Front-end_",
        "hero.bio": "Construyendo interfaces que rompen el flujo convencional. Especializado en UX experimental y aplicaciones de alto rendimiento.",
        "hero.cta": "Iniciar Proyecto",
        "projects.title": "Trabajos Seleccionados",
        "projects.subtitle": "Producciones_",
        "projects.stage": "2026_ETAPA_01",
        "about.title": "Experiencia_",
        "about.subtitle": "Trayectoria",
        "about.bio": "Creo experiencias digitales que importan. Mi viaje comenzó con una visión simple: cerrar la brecha entre la ingeniería compleja y el diseño centrado en el ser humano.",
        "about.stack": "Tecnologías",
        "contact.title": "LISTO_PARA",
        "contact.subtitle": "¿COLABORAR?",
        "contact.bio": "Siempre en busca de proyectos audaces y desafíos de ingeniería creativa.",
        "contact.availability": "Disponibilidad",
        "contact.location": "Ubicación",
        "contact.btn": "HOLA@",
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
