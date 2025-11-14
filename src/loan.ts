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
