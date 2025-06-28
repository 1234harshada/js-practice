// Question 1: Check if a number is positive, negative, or zero
let num1 = 0;
if (num1 > 0) {
  console.log("Number is positive");
} else if (num1 < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}


// ----------------------------------------------------------

// Question 2: Check whether a number is even or odd
let num2 = 7;

if (num2 % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}


// ----------------------------------------------------------

// Question 3: Age category checker
let age = 22;

if (age < 13) {
  console.log("You are a child");
} else if (age < 20) {
  console.log("You are a teenager");
} else if (age < 60) {
  console.log("You are an adult");
} else {
  console.log("You are a senior citizen");
}


// ----------------------------------------------------------

// Question 4: To print the grade of a student using if-else based on marks
let marks = 78;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else if (marks >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}


// ----------------------------------------------------------

// Question 5: Weekday name using switch-case
let day = 3;
switch (day) {
  case 1: console.log("Monday");
   break;
  case 2: console.log("Tuesday"); 
  break;
  case 3: console.log("Wednesday"); 
  break;
  case 4: console.log("Thursday"); 
  break;
  case 5: console.log("Friday"); 
  break;
  case 6: console.log("Saturday"); 
  break;
  case 7: console.log("Sunday"); 
  break;
  default: console.log("Invalid day");
}


// ----------------------------------------------------------



// Question 6: Check if a character is vowel or consonant
let char = 'e';
switch (char.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("It's a vowel");
    break;
  default:
    console.log("It's a consonant");
}


// ----------------------------------------------------------

// Question 7: Check if a year is a leap year
let year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}


// ----------------------------------------------------------

// Question 8: Arithmetic operation using switch
let a = 10;
let b = 5;
let operator = '+';

switch (operator) {
  case '+': console.log(a + b); break;
  case '-': console.log(a - b); break;
  case '*': console.log(a * b); break;
  case '/': console.log(a / b); break;
  default: console.log("Invalid operator");
}


// ----------------------------------------------------------

// Question 9: Check voting eligibility
let age2 = 17;

if (age2 >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}


// ----------------------------------------------------------

// Question 10: Check if 3 sides can form a triangle
let s1 = 5;
let s2 = 6;
let s3 = 7;

if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1) {
  console.log("Can form a triangle");
} else {
  console.log("Cannot form a triangle");
}
