///////////
// Class //
///////////

export class Repository<T extends { id: number }> {
    private data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }
    getAll(): T[] {
        return this.data;
    }
    findById(id: number): T | undefined {
        return this.data.find(i => i.id === id);
    }
    removeById(id: number): boolean {
        const size = this.data.length;
        this.data.splice(this.data.findIndex(i => i.id === id), 1);
        return size != this.data.length;
    }
}