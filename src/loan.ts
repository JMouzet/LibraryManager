import { Book } from "./book";
import { Student } from "./user";

////////////////
// Interfaces //
////////////////

export interface Loan {
    book: Book;
    student: Student;
    date: Date;
    status: LoanStatus;
}

///////////
// Types //
///////////

export type LoanStatus = "ongoing" | "returned";

///////////////
// Functions //
///////////////

export function getActiveLoans (loans: Loan []): Loan[] {
    return loans.filter(loan => loan.status === "ongoing");
}
///////////////
// Examples  //
///////////////

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