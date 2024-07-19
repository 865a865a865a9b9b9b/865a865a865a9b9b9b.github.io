import { a, b } from './module1.js';
console.log(a); // Output: 100
console.log(b()); // Output: 200

// use module2
import { c as price, d } from './module2.js';
console.log(price); // Output: 300
console.log(d()); // Output: 400
