// Data types
let name = "Harshada";  // String
let age = 25;            // Number
let isStudent = true;    // Boolean
let city;                // undefined
let country = null;      // null

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("City:", city);
console.log("Country:", country);

// Variables
var a = 10;
let b = 20;
const c = 30;

console.log("var a:", a);
console.log("let b:", b);
console.log("const c:", c);

// Hoisting example
console.log(x); // undefined (var is hoisted)
var x = 5;

// Scope example
{
  let blockLet = "inside block";
  console.log(blockLet);
}

// console.log(blockLet); //  Error: not defined outside

// Operators
let count = 5;
count++; // increment
count--; // decrement
console.log("Final count:", count);