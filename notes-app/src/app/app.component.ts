import { Component } from '@angular/core';
import { Note } from './notes/note.model';
import { NotesService } from './notes/notes.service';

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

  constructor(private notesService: NotesService) {
    this.notes = this.notesService.get();
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
