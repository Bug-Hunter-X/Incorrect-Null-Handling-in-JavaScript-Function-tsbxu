function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed'); // Handle null values by throwing an error
  }
  return a + b;
}

//console.log(foo(null, 5)); // Throws an error
//console.log(foo(5, null)); // Throws an error
console.log(foo(5, 5)); // Output: 10