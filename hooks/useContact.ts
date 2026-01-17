"use client";

import { useMemo } from "react";

export interface ContactData {
    email: string;
    github: string;
    linkedin: string;
    whatsapp: string;
}

export const useContact = () => {
    const contactData: ContactData = useMemo(() => ({
        email: "castellanoaxl@gmail.com",
        github: "https://github.com/Axldev1991/",
        linkedin: "https://www.linkedin.com/in/axel-castellano-guti%C3%A9rrez-631273202/",
        whatsapp: "https://wa.me/541150366645",
    }), []);

    const handleEmailClick = () => {
        window.location.href = `mailto:${contactData.email}`;
    };

    return {
        contactData,
        handleEmailClick,
    };
};
