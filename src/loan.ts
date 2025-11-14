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