import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoteDetailsComponent } from './notes/note-details.component';
import { NotesListComponent } from './notes/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailsComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
