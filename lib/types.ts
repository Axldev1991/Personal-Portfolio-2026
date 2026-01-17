export interface Project {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    link?: string;
    github?: string;
}

export interface NavLink {
    name: string;
    href: string;
}
