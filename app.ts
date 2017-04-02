// import module ( ES6 way <3 )
import { NotesService, NotesServiceInterface } from './notes.service';

var service: NotesServiceInterface = new NotesService();

service.add('first note');
service.add('goyello note ... the second one');

console.log(service.get());