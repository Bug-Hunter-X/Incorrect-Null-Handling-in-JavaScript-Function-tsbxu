# Incorrect Null Handling in JavaScript Function

This repository demonstrates a common bug in JavaScript functions: incorrect handling of null values.

The `foo` function is intended to add two numbers. However, if either input is null, it returns 0. This might be unexpected behavior and could lead to subtle errors in larger applications.

The solution demonstrates how to handle null values more appropriately, either by throwing an error or providing a more suitable default value.

## Bug
The `bug.js` file contains the faulty function, showing unexpected 0 return for null inputs.

## Solution
The `bugSolution.js` file demonstrates a corrected version of the function, using a more robust approach to handle null inputs.

## How to run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Execute each file to observe the difference in output.