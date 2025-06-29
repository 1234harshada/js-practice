//Q1: Print 1 to 5 using do...while
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

//Q2: Skip 4 and 8 using continue
for (let i = 1; i <= 10; i++) {
  if (i === 4 || i === 8) {
    continue;
  }
  console.log(i);
}

 //Q3: Count first 15 even numbers from 1 to 100 and break
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    if (count >= 15) {
      break;
    }
    count++;
  }
}
console.log("Even Count:", count);

 //Q4: Add value at end using push
let arr = [1, 2];
arr.push(3);
console.log(arr); 

 //Q5: Remove last value using pop
arr.pop();
console.log(arr); 

 //Q6: Remove first item using shift
let fruits = ["Apple", "Banana", "Mango"];
fruits.shift();
console.log(fruits); 

 //Q7: Add item at start using unshift
fruits.unshift("Orange");
console.log(fruits); 

 //Q8: Slice part of array
let a = ["a", "b", "c", "d"];
let result = a.slice(1, 3);
console.log(result); 

 //Q9: Replace value using splice
a.splice(2, 1, "x");
console.log(a); 

// Q10: Reverse array (copy) and convert to string
let items = [1, 2, 3];
console.log(items.toReversed()); 
console.log(items.toString());   

// Q11: Find middle element of array
let nums = [5, 10, 15, 20, 25];
let mid = Math.round((nums.length - 1) / 2);
console.log(nums[mid]); 

// Q12: Find index of 33 using findIndex
let values = [11, 22, 33];
let index = values.findIndex((val) => val === 33);
console.log(index); 

// Q13: Use Math methods: round, floor, ceil
console.log(Math.round(4.7));  
console.log(Math.round(4.2));  
console.log(Math.floor(4.7));  
console.log(Math.ceil(4.2));   

// Q14: Merge two arrays using concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log(merged); 

// Q15: Find index of value using indexOf
let fruits2 = ["apple", "banana", "mango"];
let fruitIndex = fruits2.indexOf("banana");
console.log(fruitIndex); 

// Q16: Access array values using at()
let colors = ["red", "green", "blue"];
console.log(colors.at(1));  
console.log(colors.at(-1));  