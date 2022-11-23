//----- QUESTION -----//

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. 
// In how many distinct ways can you climb to the top?



//----- SOLUTION -----//

// This problem can be solved using a Fibonacci sequence.

// If there is only one stair, there is only one way to reach the top: Take 1 step
// If there are two stairs, there are two ways to reach the top: 1 + 1 step, or 2 steps
// If there are three stairs, the number of ways to reach the top are the sum of the previous two results: 1 + 2
// If there are n stairs, the number of ways to reach the top are the sum of n-1 steps and n-2 steps

// Calculate the Fibonacci sequence using 1 and 2 as the base cases
// You can store the intermediate results using an array, but you can do it using two variables and a temp variable



// Input: Number of steps
let n = 10;



// This function returns the number of ways to climb a staircase with n steps
const climbStairs = function(n) {
    
  // If the number of steps is 1, return 1
  if (n === 1) {
      return 1;
  }
  
  // Store the first and second steps, as well as a temp variable for calculation
  // First and second will be used to store the n-2 and n-1 values
  let first = 1;
  let second = 2;
  let temp;
  
  // Loop from 2 to n,
  for (let i = 2; i < n; i++) {
      
    // Store the value of first in a temp variable
    temp = first;

    // Store the second value in the first variable
    first = second;

    // Recalculate the second as the second plus first
    second = second + temp;
  }
  
  // Return the second
  return second;
};



// Test the climbStairs function
console.log(climbStairs(n));
