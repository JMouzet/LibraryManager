import { Author } from "./author";

////////////////
// Interfaces //
////////////////

export interface Book {
    id: number;
    title: string;
    author: Author;
    available: boolean;
    category: BookCategory[];
}

///////////
// Types //
///////////

export type BookCategory = "novel" | "history" | "science" | "poetry";