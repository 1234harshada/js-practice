// LINEAR SEARCH 
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }
  return -1; 
}

let a = [3, 6, 9, 12, 15];
let find1 = 12;
console.log("Linear Search Result:", linearSearch(a, find1)); 






// BINARY SEARCH 
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1; 
}

let b = [2, 4, 6, 8, 10];
let find2 = 8;
console.log("Binary Search Result:", binarySearch(b, find2)); 