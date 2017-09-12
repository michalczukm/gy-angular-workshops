"use strict";
exports.__esModule = true;
var notes_service_1 = require("./notes.service");
var service = new notes_service_1.NotesService();
service.add('first note');
service.add('goyello note ... the second one');
console.log(service.get());
//# sourceMappingURL=app.js.map