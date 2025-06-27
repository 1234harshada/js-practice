// Age Example
let age = 15;

if (age < 18) {
  console.log("Welcome, young learner!");
} else if (age >= 18 && age < 60) {
  console.log("Welcome, working professional!");
} else {
  console.log("Welcome, respected elder!");
}

// Fruit Example
let fruit = "apple";

switch(fruit) {
  case "apple":
    console.log("Apples are red or green.");
    break;
  case "banana":
    console.log("Bananas are yellow.");
    break;
  case "mango":
    console.log("Mangoes are sweet and seasonal.");
    break;
  default:
    console.log("Unknown fruit");
}