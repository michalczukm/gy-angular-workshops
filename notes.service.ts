export interface NotesServiceInterface {
    add(text: string): void;
    get(): Note[];
}

// class - like in ES6, or C# or Java or C++
// export - to use it in other modules. 
// Now it has to implement interface
export class NotesService implements NotesServiceInterface {
    // access modifiers - wow
    private notes: Note[] = [];

    add(text: string) {
        const newNote = {
            text: text,
            createdOnDate: new Date()
        } as Note;

        this.notes.push(newNote);
    }

    // optional strong typing
    get(): Note[] {
        return this.notes;
    }
}

export type Note = {
    text: string,
    createdOnDate: Date
}