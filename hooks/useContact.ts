"use client";

import { useState } from "react";

export interface ContactData {
    email: string;
    github: string;
    linkedin: string;
    whatsapp: string;
}

export const useContact = () => {
    const [contactData] = useState<ContactData>({
        email: "contact@example.com",
        github: "https://github.com/Axldev1991",
        linkedin: "#",
        whatsapp: "#",
    });

    const handleEmailClick = () => {
        window.location.href = `mailto:${contactData.email}`;
    };

    return {
        contactData,
        handleEmailClick,
    };
};
