import { Component, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html'
})
export class CreateNoteComponent {
  @Output() createdItem = new EventEmitter<Note>();

  newNote = {} as Note;

  onSubmit() {
    this.newNote.createdOn = new Date();

    this.createdItem.emit(this.newNote);

    this.newNote = {} as Note;
  }
}
