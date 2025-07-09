// 1. Find second highest number
let arr1 = [10, 5, 20, 8, 15];
let max = 0;
let second = 0;
for (i = 0; i < arr1.length; i++) {
  if (arr1[i] > max) {
    second = max;
    max = arr1[i];
  } else if (arr1[i] > second && arr1[i] < max) {
    second = arr1[i];
  }
}
console.log(second);

// 2. Character frequency
let str2 = "apple";
let freq = {};
for (i = 0; i < str2.length; i++) {
  let ch = str2[i];
  if (freq[ch]) {
    freq[ch]++;
  } else {
    freq[ch] = 1;
  }
}
console.log(freq);

// 3. Reverse each word
let words = ["hello", "world"];
let result3 = [];
for (i = 0; i < words.length; i++) {
  let rev = "";
  for (j = words[i].length - 1; j >= 0; j--) {
    rev += words[i][j];
  }
  result3.push(rev);
}
console.log(result3);

// 4. Even or Odd using map
let nums4 = [1, 2, 3, 4];
let res4 = nums4.map(function(n) {
  if (n % 2 == 0) return "even";
  else return "odd";
});
console.log(res4);

// 5. Flatten 1 level array
let arr5 = [1, 2, [3, 4], 5];
let flat = [];
for (i = 0; i < arr5.length; i++) {
  if (Array.isArray(arr5[i])) {
    for (j = 0; j < arr5[i].length; j++) {
      flat.push(arr5[i][j]);
    }
  } else {
    flat.push(arr5[i]);
  }
}
console.log(flat);

// 6. Prime numbers 10 to 50
for (i = 10; i <= 50; i++) {
  let prime = true;
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      prime = false;
      break;
    }
  }
  if (prime) console.log(i);
}

// 7. Names starting with vowels
let names = ["Alice", "Bob", "Eve", "Uma", "Charlie"];
let vowels = [];
for (i = 0; i < names.length; i++) {
  let ch = names[i][0].toLowerCase();
  if ("aeiou".includes(ch)) {
    vowels.push(names[i]);
  }
}
console.log(vowels);

// 8. Rotate array right by 1
let arr8 = [1, 2, 3, 4];
let last = arr8[arr8.length - 1];
for (i = arr8.length - 1; i > 0; i--) {
  arr8[i] = arr8[i - 1];
}
arr8[0] = last;
console.log(arr8);

// 9. Check if all > 10
let arr9 = [12, 15, 22];
let flag = true;
for (i = 0; i < arr9.length; i++) {
  if (arr9[i] <= 10) {
    flag = false;
    break;
  }
}
console.log(flag);

// 10. Filter divisible by 3 & 5
let arr10 = [10, 15, 30, 20, 45];
for (i = 0; i < arr10.length; i++) {
  if (arr10[i] % 3 == 0 && arr10[i] % 5 == 0) {
    console.log(arr10[i]);
  }
}

// 11. Fibonacci 15 terms
let a = 0, b = 1;
console.log(a);
console.log(b);
for (i = 3; i <= 15; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}

// 12. Count occurrences
let arr12 = [1, 2, 1, 3, 1, 4];
let count = 0;
for (i = 0; i < arr12.length; i++) {
  if (arr12[i] == 1) count++;
}
console.log(count);

// 13. Sum of even numbers
let arr13 = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (i = 0; i < arr13.length; i++) {
  if (arr13[i] % 2 == 0) {
    sum += arr13[i];
  }
}
console.log(sum);

// 14. Palindrome check
let str14 = "madam";
let rev14 = "";
for (i = str14.length - 1; i >= 0; i--) {
  rev14 += str14[i];
}
console.log(str14 == rev14);

// 15. Grade using switch
let marks = 85;
switch (true) {
  case marks >= 90: console.log("A"); break;
  case marks >= 80: console.log("B"); break;
  case marks >= 70: console.log("C"); break;
  default: console.log("D");
}

// 16. Redeclaring variable
let x = 10;
// var x = 20; // This causes error

// 17. Remove duplicates
let arr17 = [1, 2, 2, 3, 4, 1];
let unique = [];
for (i = 0; i < arr17.length; i++) {
  if (!unique.includes(arr17[i])) {
    unique.push(arr17[i]);
  }
}
console.log(unique);

// 18. First 3 elements
let arr18 = [10, 20, 30, 40, 50];
let result18 = [];
for (i = 0; i < 3; i++) {
  result18.push(arr18[i]);
}
console.log(result18);

// 19. Intersection of arrays
let a1 = [1, 2, 3];
let a2 = [2, 3, 4];
let result19 = [];
for (i = 0; i < a1.length; i++) {
  if (a2.includes(a1[i])) {
    result19.push(a1[i]);
  }
}
console.log(result19);

// 20. Reverse array using while
let arr20 = [1, 2, 3, 4];
let left = 0;
let right = arr20.length - 1;
while (left < right) {
  let temp = arr20[left];
  arr20[left] = arr20[right];
  arr20[right] = temp;
  left++;
  right--;
}
console.log(arr20);

// 21. Check if all positive
let arr21 = [1, 4, 6, 9];
let flag21 = true;
for (i = 0; i < arr21.length; i++) {
  if (arr21[i] < 0) {
    flag21 = false;
    break;
  }
}
console.log(flag21);

// 22. Check upper and lower case
let str22 = "HelloWorld";
let up = false, low = false;
for (i = 0; i < str22.length; i++) {
  if (str22[i] >= 'A' && str22[i] <= 'Z') up = true;
  if (str22[i] >= 'a' && str22[i] <= 'z') low = true;
}
console.log(up && low);

// 23. Check prime using flag
let num23 = 13;
let prime = true;
for (i = 2; i < num23; i++) {
  if (num23 % i == 0) {
    prime = false;
    break;
  }
}
console.log(prime);

// 24. Check if array is sorted
let arr24 = [2, 5, 8, 9];
let sorted = true;
for (i = 0; i < arr24.length - 1; i++) {
  if (arr24[i] > arr24[i + 1]) {
    sorted = false;
    break;
  }
}
console.log(sorted);

// 25. Check repeating characters
let str25 = "coding";
let repeat = false;
for (i = 0; i < str25.length; i++) {
  for (j = i + 1; j < str25.length; j++) {
    if (str25[i] == str25[j]) {
      repeat = true;
      break;
    }
  }
}
console.log(repeat);