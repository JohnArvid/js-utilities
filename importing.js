import makePassword from './createPassword.js';
import unique from './deleteDuplicates.js';
import lock from './idle.js'; 
import isEmptyObj from './isEmptyObj.js';
import { reverseString, isPalindrome } from './string-utilities/reverseString.js';
import { counter } from './counter.js';
console.log(makePassword());
console.log(unique([1, 2, 2, 3, 4, 4, 5]));
lock();
console.log( isEmptyObj(123) );
console.log(isPalindrome('Anna'));
console.log(reverseString('Backwards'));
console.log(counter.increment());


