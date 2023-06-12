/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
console.log('First array (no spread):', array1); // it was push to this one as well, becasue all is connected
console.log('Note: "array2.push(4)"  affecting both');
console.log('Second array (no spread):', array2);

console.log('----------------');

// Copying an array
let array3 = [4, 5, 6];
let array4 = [...array3]; // we solve like that the previous issue
array4.push(7);
console.log('Third array (no spread):', array3);
console.log('Note: "array4.push(7)"  NOT affecting both');
console.log('Forth array (spread):', array4);

console.log('----------------');

// Copying an object

let object1 = { a: 1, b: 2, c: 3 };
let object2 = { ...object1, b: 7, d: 4, e: 5 } // update or add new key-value pairs to the object
let object3 = { ...object2 };
console.log('First Object (no spread):', object1);
console.log('Second Object (spread, update & add):', object2);
console.log('Third Object (spread, copy):', object3); // a copy of the second
// Copying only part of an array/object