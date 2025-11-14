import { Library } from "./library";
import { Author } from "./author";
import { User, Student, Librarian } from "./user";
import {getActiveLoans, Loan} from "./loan";
import {Book} from "./book";
import {Repository} from "./repository";

// Create authors
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

// Create books
const book1: Book = {
    id: 4,
    title: "Les Misérables",
    author: author1,
    available: true,
    category: ["novel"]
};
const book2: Book = {
    id: 5,
    title: "Vingt mille lieues sous les mers",
    author: author2,
    available: true,
    category: ["novel", "science"]
};
const book3: Book = {
    id: 6,
    title: "L'Étranger",
    author: author3,
    available: true,
    category: ["novel"]
};

// Create users
const student1: Student = new Student("Jean", "Dupont", 20);
const student2: Student = new Student("Marie", "Martin", 25);
const student3: Student = new Student("Paul", "Durand", 23);
const librarian: Librarian = new Librarian("Lucas", "Fernandez", 35);

// Create loans
const loan1: Loan = {
    book: book1,
    student: student1,
    date: new Date("2024-01-15"),
    status: "ongoing"
};
const loan2: Loan = {
    book: book2,
    student: student2,
    date: new Date("2024-02-01"),
    status: "ongoing"
};
const loan3: Loan = {
    book: book3,
    student: student3,
    date: new Date("2024-01-20"),
    status: "returned"
};

// Testing library
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("Get list of available books");
console.log(library.listAvailable());
console.log("");
console.log("Find book id 4");
console.log(library.findBookById(4));
console.log("");

// Testing users
const users: User[] = [student1, student2, student3, librarian];
console.log("Show each users");
users.forEach(user => {
    console.log(user);
    if (user instanceof Student) {
        user.study();

    }
    if (user instanceof Librarian) {
        user.manage();
    }

    console.log("");
})

// Testing loans
const loans: Loan[] = [loan1, loan2, loan3]
console.log("Get active loans");
console.log(getActiveLoans(loans));
console.log("");

// Testing repository
const repo = new Repository();
console.log("Add books to repository");
repo.add(book1);
repo.add(book2);
repo.add(book3);
console.log("");
console.log("Add authors to repository");
repo.add(author1);
repo.add(author2);
repo.add(author3);
console.log("");

console.log("Get everything from repo");
console.log(repo.getAll());
console.log("");

console.log("Find author id 1");
console.log(repo.findById(1));
console.log("");
console.log("Find book id 4");
console.log(repo.findById(4));
console.log("");

console.log("Remove book id 5");
console.log(repo.removeById(5));
console.log("");
console.log("Check if book id 5 has been deleted");
console.log(repo.findById(5));
console.log("");
