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
