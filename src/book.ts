import { Author } from "./author";

export interface Book {
    id: number;
    title: string;
    author: Author;
    available: boolean;
    category: BookCategory[];
}

export type BookCategory = "novel" | "history" | "science" | "poetry";