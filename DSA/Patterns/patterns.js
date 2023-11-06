//! ---FREQUENCY COUNTER PATTERN---

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// A naive solution
// Time complexity: O(n^2)
// Space complexity: O(1)

function same(arr1, arr2) {
    // if not same length return false
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        // find index of squared value in arr2
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        // remove the squared value from arr2
        arr2.splice(correctIndex, 1);
    }
    return true;
}


// Refactored solution
// Time complexity: O(n)
// Space complexity: O(n)

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // create objects to store frequency of values
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // loop through both arrays and store frequency of values in objects
    for (let val of arr1) {
        // if val exists in object, increment(pre-increment operator), otherwise set to 1
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
    }
    // loop through first object and compare values to second object
    for (let key in frequencyCounter1) {
        // if squared key doesn't exist in second object, return false
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // if frequency of squared key doesn't match frequency of key, return false
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

function validAnagram(str1, str2) {
    // if not same length return false
    if (str1.length !== str2.length) {
        return false;
    }
    let lookup = {};
    // loop through first string and store frequency of values in object
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists in object, increment(pre-increment operator), otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    // loop through second string and compare values to object
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // if letter doesn't exist in object or frequency is 0, return false
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}


//! ---MULTIPLE POINTERS PATTERN---

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


//! SLIDING WINDOW PATTERN

// This pattern involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition, the window either increases or closes (and a new window is created).
// Very useful for keeping track of a subset of data in an array/string etc.

function maxSubarraySum(arr,num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    // create first window
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    // set tempSum to maxSum
    tempSum = maxSum;
    // loop through array starting at index num
    for(let i = num; i < arr.length; i++) {
        // subtract first number in window and add next number
        tempSum = tempSum - arr[i - num] + arr[i];
        // if tempSum is greater than maxSum, set maxSum to tempSum
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

//! DIVIDE AND CONQUER PATTERN

// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity.
// Binary search is a great example of this.

function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}