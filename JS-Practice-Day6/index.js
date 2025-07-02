// 1. map() – Multiply Every Number by 5
let nums = [4, 5, 6];
let multipliedByFive = nums.map(num => num * 5);
console.log("1. multipliedByFive:", multipliedByFive); 


// 2. forEach() – Greet Students
let students = ["Harshal", "Rohan", "Manish"];
console.log("2. Greetings:");
students.forEach(name => console.log("Welcome", name));


// 3. filter() – Find Even Numbers
let numbers = [11, 24, 33, 48, 50, 61];
let evenNumbers = numbers.filter(num => num % 2 == 0);
console.log("3. evenNumbers:", evenNumbers);


// 4. Count Even Numbers (Using for Loop)
let arr = [12, 35, 40, 27, 88];
let evenCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    evenCount++;
  }
}
console.log("4. evenCount:", evenCount);


// 5. Find Index from End 
let ages = [18, 25, 30, 25, 40];
let targetAge = 25;

for (let i = 4; i >= 0; i = i - 1) {
  if (ages[i] == targetAge) {
    console.log("5. Index from end side:", i);
    break;
  }
}
