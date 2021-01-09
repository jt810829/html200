// Create an array, with at least 5 strings
let arr = ['apple', 'book', 'car', 'dog', 'egg'];
console.log(arr);

// Add an element to the end of the array
arr.push('fork');
console.log(arr);

// Remove the third element
arr.splice(2,1);
console.log(arr);

// Create a string from the elements and comma separate them
const arrString = arr.join(',');
console.log(arrString);