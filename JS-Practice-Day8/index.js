// Multiply Two Numbers
let a = 8;
let b = 6;

function MultiplyTwoVariables() {
  console.log(a * b);
}
MultiplyTwoVariables(); 


// Divide Two Numbers
let x = 100;
let y = 20;

function DivideTwoVariables() {
  console.log(x / y);
}
DivideTwoVariables(); 


// Add using parameters
function AddTwo(num1, num2) {
  console.log(num1 + num2);
}
AddTwo(30, 70); 


// Subtract using parameters
function Subtract(num1, num2) {
  console.log(num1 - num2);
}
Subtract(90, 45); 


// Add 4 numbers
function AddFourNumbers(a, b, c, d) {
  console.log(a + b + c + d);
}
AddFourNumbers(10, 20, 5, 15); 


// Return example
function MultiplyAndReturn(a, b) {
  return a * b;
}
console.log(MultiplyAndReturn(5, 4)); 


// Filter from array
let courses = ["HTML", "CSS", "JavaScript"];
let input = "CSS";

function MatchCourse(list, text) {
  let result = list.filter((item) => item === text);
  return result;
}
console.log(MatchCourse(courses, input));