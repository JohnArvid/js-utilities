import makePassword from './createPassword.js';
import unique from './deleteDuplicates.js';
import lock from './idle.js'; 
console.log(makePassword());
console.log(unique([1, 2, 2, 3, 4, 4, 5]));
lock();


