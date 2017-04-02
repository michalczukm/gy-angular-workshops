import { Component } from '@angular/core';
import { Note } from './notes/note.model';

enum NotesViewState {
  display = 0,
  create = 1
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Note[] = [];
  selectedNote: Note;
  viewState = NotesViewState.display;

  notesViewStateRef = NotesViewState;

  constructor() {
    this.notes = [
      { title: 'First note', content: 'First note sample content', createdOn: new Date(2017, 4, 1, 15, 30) },
      { title: 'Second note', content: 'Second note sample content', createdOn: new Date(2017, 4, 2, 16, 30) },
      { title: 'Third note', content: 'Third note sample content', createdOn: new Date(2017, 4, 3, 17, 30) },
      { title: 'Fourth note', content: 'Fourth note sample content', createdOn: new Date(2017, 4, 4, 18, 30) },
    ] as Note[];

    this.selectedNote = this.notes[0];
  }

  onSelectedItem(note: Note) {
    this.selectedNote = note;
    this.viewState = NotesViewState.display;
  }

  onCreatedItem(note: Note) {
    this.notes.push(note);
    this.viewState = NotesViewState.display;
  }

  createNote() {
    this.viewState = NotesViewState.create;
  }
}
