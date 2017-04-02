export interface NotesServiceInterface {
    add(text: string): void;
    get(): string[];
}

// class - like in ES6, or C# or Java or C++
// export - to use it in other modules. 
// Now it has to implement interface
export class NotesService implements NotesServiceInterface {
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