import { Library } from "./library";
import { Author } from "./author";

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