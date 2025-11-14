import { Book } from "./book";


/////////////
// Classes //
/////////////

export class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    listAvailable(): Book[] {
        return this.books.filter(book => book.available === true);
    }

    findBookById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }
}
