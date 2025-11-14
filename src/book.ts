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

///////////////
// Functions //
///////////////

export function isValidCategory(cat: BookCategory): boolean {
    return ["novel", "history", "science", "poetry"].includes(cat);
}