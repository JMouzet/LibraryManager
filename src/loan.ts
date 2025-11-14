import { Book } from "./book";

export interface Loan {
    book: Book;
    student: Student;
    date: Date;
    status: LoanStatus;
}