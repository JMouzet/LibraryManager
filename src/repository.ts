///////////
// Class //
///////////

export class Repository<T extends { id: number }> {
    add (item: T): void
    getAll(): T[]
    findById(id: number): T | undefined
    removeById(id: number): boolean
}