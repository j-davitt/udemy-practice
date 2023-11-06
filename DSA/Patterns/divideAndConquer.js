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