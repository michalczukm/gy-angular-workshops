import { Component, Input } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html'
})
export class NoteDetailsComponent {
  @Input() selectedNote = {} as Note;
}
