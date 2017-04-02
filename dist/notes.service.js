"use strict";
var NotesService = (function () {
    function NotesService() {
        this.notes = [];
    }
    NotesService.prototype.add = function (text) {
        this.notes.push(text);
    };
    NotesService.prototype.get = function () {
        return this.notes;
    };
    return NotesService;
}());
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map