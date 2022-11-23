//----- QUESTION -----//

// The Fibonacci numbers, commonly denoted F(n), form a sequence called the Fibonacci sequence. 
// Each number is the sum of the two preceding ones, starting from 0 and 1.

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Given n, calculate F(n)



//----- SOLUTION -----//

// Use a loop to calculate each Fibonacci number from 2 onwards
// You can use an array to keep track of the Fibonacci numbers at each step until n
// Because we only need the nth number, we can use three variables instead of a full array



// Input: An integer representing the nth Fibonacci number
let n = 10;



// This function returns the nth fibonacci number
const fib = function(n) {
  
  // If n is 0, return 0
  if (n === 0) {
    return 0;
  } 

  // The first and second variables with store the n-1 and n-2 values
  // The temp variable is used for calculation only
  let first = 1;
  let second = 1;
  let temp;
  
  // Loop from 2 to the end of the array
  for (let i = 2; i < n; i++) {
      
    // Calculate the nth element using the previous 2 elements
    temp = first;
    first = second;
    second = second + temp;
  }
  
  // Return the last value of the Fibonacci sequence
  return second;
};



// Test the fib function
console.log(fib(n));
