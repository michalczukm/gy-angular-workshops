"use strict";
var NotesService = (function () {
    function NotesService() {
        this.notes = [];
    }
    NotesService.prototype.add = function (text) {
        var newNote = {
            text: text,
            createdOnDate: new Date()
        };
        this.notes.push(newNote);
    };
    NotesService.prototype.get = function () {
        return this.notes;
    };
    return NotesService;
}());
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map