import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html'
})
export class NotesListComponent {
  @Input() notes = [] as Note[];
  @Output() selectedItem = new EventEmitter<Note>();

  selectedNote: Note;

  selectItem(note: Note) {
    this.selectedNote = note;
    this.selectedItem.emit(note);
  }
}
