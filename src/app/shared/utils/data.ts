export interface ApiNews {
    meta: Meta
    data: Noticia[]
}

export interface Meta {
    found: number
    returned: number
    limit: number
    page: number
}

export interface Noticia {
    uuid: string
    title: string
    description: string
    keywords: string
    snippet: string
    url: string
    image_url: string
    language: string
    published_at: string
    source: string
    categories: string[]
    relevance_score: any
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    avatar: string;
    categories: string[];
    newsletter: boolean;
}

export interface Category {
    value: string;
    name: string;
}

export const CATEGORIES: Category[] = [
    { value: 'general', name: 'General' },
    { value: 'tech', name: 'Tecnología' },
    { value: 'sports', name: 'Deportes' },
    { value: 'politics', name: 'Política' },
    { value: 'business', name: 'Económicas' },
    { value: 'science', name: 'Científicas' },
    { value: 'entertainment', name: 'Entretenimiento' },
    { value: 'health', name: 'Salud' },
    { value: 'environment', name: 'Medio Ambiente'}
];