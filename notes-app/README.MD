# Exercises:
## Structural Directives and Templates
1. I added Notes array `notes` and bind it to app.component.html view. Add `selectedNote`, set it to **first array element** and bind it to view.
1. You saw how to use `*ngIf` - use it to add extra `<h5>` header to list element which is selected.
1. We've added `ngForm` and `ngSubmit`, but still nothing changed. Add `newNote` to list, but remember - it also needs created date!
1. Add missing `date` pipes.

## Components
1. Adding components - finally! Same as I had extracted `NoteDetailsComponent` please create `NotesListComponent`. Hmm, what about `selectItem` method?
1. Do the same with adding note feature. 
   * Move it to new component `CreateNoteComponent`
   * Add @Output `createdItem` in your new component
1. The icing on the cake - lets hide components when not used.
   * Handle `+` button with `createNote` method (create it) and hide `app-note-details` component if you're in creating state
   * Hide `app-create-note` component if you're only watching details.
   * Tip - use `*ngIf` and think about some state .. maybe variable, maybe enum.

## Servies
1. Now we're storing `notes` in services. Change the code to only `fetch` the data from service after adding new note.