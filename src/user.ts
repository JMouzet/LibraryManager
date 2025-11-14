///////////
// Types //
///////////

export type Role = "student" | "librarian" | "admin"


/////////////
// Classes //
/////////////

export class User {
    public firstName: string;
    public lastName: string;
    private _age: number;
    public role: Role;

    constructor(firstName: string, lastName: string, age: number, role: Role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
        this.role = role;
    }

    set age(age: number) {
        if (age < 0) throw new Error("Age cannot be negative");
        this._age = age;
    }

    get age(): number {
        return this._age;
    }

    public getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

export class Student extends User {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age, "student");
    }

    public study() {
        console.log("Studying...");
    }
}

export class Librarian extends User {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age, "librarian");
    }

    public manage() {
        console.log("Managing...");
    }
}