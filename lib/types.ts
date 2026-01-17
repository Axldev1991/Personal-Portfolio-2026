export interface Project {
    title: string;
    description: string;
    description_es?: string;
    tags: string[];
    image?: string;
    link?: string;
    github?: string;
}

export interface NavLink {
    name: string;
    href: string;
}
