import { Library } from "./library";
import { Author } from "./author";
import { User, Student, Librarian } from "./user";
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

const student1: Student = new Student("Jean", "Dupont", 20);
const student2: Student = new Student("Marie", "Martin", 25);
const student3: Student = new Student("Paul", "Durand", 23);
const librarian: Librarian = new Librarian("Lucas", "Fernandez", 35);
const users: User[] = [student1, student2, student3, librarian];
users.forEach(user => {
    if (user instanceof Student) {
        user.study();
    }

    if (user instanceof Librarian) {
        user.manage();
    }
})

// Création de 3 emprunts de test

export const loan1: Loan = {
    book: {
        id: 1,
        title: "Le Seigneur des Anneaux",
        author: { id: 1, name: "J.R.R. Tolkien", birthYear: 1892 } as Author,
        available: false,
        category: ["novel"]
    },
    student: student1,
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
    student: student2,
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
    student: student3,
    date: new Date("2024-01-20"),
    status: "returned"
};