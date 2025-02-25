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
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar: string;
    categories: string[];
    newsletter: boolean;
}