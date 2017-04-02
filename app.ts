// import module ( ES6 way <3 )
import { NotesService } from './notes.service';

var service = new NotesService();

service.add('first note');
service.add('goyello note ... the second one');

console.log(service.get());