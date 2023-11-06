// Create pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition.
// linear structure like a string or array.

// Write a function called sumZero which accepts a sorted array of integers
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Naive solution
// Time complexity: O(n^2)
// Space complexity: O(1)

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === 0) {
              return [arr[i], arr[j]];
          }
      }
  }
}


// Refactored solution
// Time complexity: O(n)
// Space complexity: O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) {
          return [arr[left], arr[right]];
      } else if (sum > 0) {
          right--;
      } else {
          left++;
      }
  }
}

// Write a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// there can be negative numbers, but will always be sorted.

// this function works if you are allowed to alter the array
function countUniqueValues(arr) {
  if(arr.length === 0) return 0
  let i = 0;
  for(let j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j]
      }
  }
  return i + 1;
}

[1, 2, 3, 3, 3]