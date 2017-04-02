import { Component } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html'
})
export class NoteDetailsComponent {
  selectedNote = {} as Note;
}
