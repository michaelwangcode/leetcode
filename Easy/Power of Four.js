//----- QUESTION -----//

// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.



//----- SOLUTION -----//

// Create a product variable
// Iterate from 0 to 15 and see if the number is equal to the product
// If not, multiply the product by 2 and check again
// We only need to do this 15 times because the value of 4^x grows very fast



// Input: An integer
const n = 1024;



// This function returns true if the number is a power of four
const isPowerOfFour = function(n) {
  
  // Store the product
  let product = 1;
  
  // Iterate from 0 to 15
  for (let i = 0; i < 16; i++) {

    // If the product is equal to the given number n,
    if (product === n) {

      // n is a power of 4 so return true
      return true;
    }
      
    // Multiply the product by 4
    product *= 4;
  }
  
  // Otherwise return false
  return false;
};



// Test the isPowerOfFour function
console.log(isPowerOfFour(n));
