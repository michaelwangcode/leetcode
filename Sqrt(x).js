//----- QUESTION -----//

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
// The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.



//----- SOLUTION -----//

// Iterate from 0 to x and check to see if x has a square root
// If there isn't a square root, return the first number



// Input: An integer
const x = 8;



// This function returns the nearest square root rounded down
const mySqrt = function(x) {
    
  // If x is 0 the square root is 0
  if (x === 0) return 0;

  // If x is 1 or 2, the nearest square root is 1
  if (x === 1) return 1;
  if (x === 2) return 1;

  // Iterate i from 1 to x
  for (let i = 1; i < x; i++) {
      
    // If i squared is exactly equal to x,
    if (i * i === x) {
        
      // Return i
      return i;
        
    // If i squared is greater than x,
    } else if (i * i > x) {
        
      // Return one less than i
      return i - 1;
    }
  }
};



// Test the mySqrt function
console.log(mySqrt(x));
