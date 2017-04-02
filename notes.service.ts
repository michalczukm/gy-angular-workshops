// class - like in ES6, or C# or Java or C++
// export - to use it in other modules
export class NotesService {
    // access modifiers - wow
    private notes: string[] = [];

    add(text: string) {
        this.notes.push(text);
    }

    // optional strong typing
    get(): string[] {
        return this.notes;
    }
}