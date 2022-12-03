//----- QUESTION -----//

// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.



//----- SOLUTION -----//

// Create a product variable
// Iterate from 0 to 30 and see if the number is equal to the product
// If not, multiply the product by 2 and check again



// Input: An integer
const n = 256;



// This function returns true if the number is a power of two
const isPowerOfTwo = function(n) {

  // Store the product
  let product = 1;
  
  // Iterate from 0 to 30
  for (let i = 0; i < 31; i++) {

    // If the product is equal to the given number n,
    if (product === n) {

      // n is a power of 2 so return true
      return true;
    }
    
    // Multiply the product by 2
    product *= 2;
  }
  
  // Otherwise return false
  return false;
};



// Test the isPowerOfTwo function
console.log(isPowerOfTwo(n));
