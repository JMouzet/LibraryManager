import { Library } from "./library";
import { Author } from "./author";
import { Loan } from "./loan";

//test 3 auteurs / books

const library = new Library();

const author1: Author = {
    id: 1,
    name: "Victor Hugo",
    birthYear: 1802
};

const author2: Author = {
    id: 2,
    name: "Jules Verne",
    birthYear: 1828
};

const author3: Author = {
    id: 3,
    name: "Albert Camus",
    birthYear: 1913
};

library.addBook({
    id: 1,
    title: "Les Misérables",
    author: author1,
    available: true,
    category: ["novel"]
});

library.addBook({
    id: 2,
    title: "Vingt mille lieues sous les mers",
    author: author2,
    available: true,
    category: ["novel", "science"]
});

library.addBook({
    id: 3,
    title: "L'Étranger",
    author: author3,
    available: true,
    category: ["novel"]
});

// Création de 3 emprunts de test

export const loan1: Loan = {
    book: {
        id: 1,
        title: "Le Seigneur des Anneaux",
        author: { id: 1, name: "J.R.R. Tolkien", birthYear: 1892 } as Author,
        available: false,
        category: ["novel"]
    },
    student: { id: 1, name: "Jean Dupont" },
    date: new Date("2024-01-15"),
    status: "ongoing"
};

export const loan2: Loan = {
    book: {
        id: 2,
        title: "1984",
        author: { id: 2, name: "George Orwell", birthYear: 1903 } as Author,
        available: false,
        category: ["novel"]
    },
    student: { id: 2, name: "Marie Martin" },
    date: new Date("2024-02-01"),
    status: "ongoing"
};

export const loan3: Loan = {
    book: {
        id: 3,
        title: "Histoire de France",
        author: { id: 3, name: "Pierre Dubois", birthYear: 1950 } as Author,
        available: true,
        category: ["history"]
    },
    student: { id: 3, name: "Paul Durand" },
    date: new Date("2024-01-20"),
    status: "returned"
};