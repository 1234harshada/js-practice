let a = 5;
let b = "5";

console.log("a == b:", a == b);     // true
console.log("a === b:", a === b);   // false

let x = 10;
let y = 20;
console.log("x > y:", x > y);       // false

let marks = 85;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}