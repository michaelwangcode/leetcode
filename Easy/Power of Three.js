//----- QUESTION -----//

// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3^x.



//----- SOLUTION -----//

// Create a product variable
// Iterate from 0 to 19 and see if the number is equal to the product
// If not, multiply the product by 2 and check again
// We only need to do this 15 times because the value of 3^x grows very fast



// Input: An integer
const n = 27;



// This function returns true if the number is a power of three
const isPowerOfThree = function(n) {
    
  // Store the product
  let product = 1;
  
  // Iterate from 0 to 19
  for (let i = 0; i < 20; i++) {
      
    // If the product is equal to the given number n,
    if (product === n) {
        
      // n is a power of 3 so return true
      return true;
    } 
    
    // Multiply the product by 3
    product *= 3;
  }
  
  // Otherwise return false
  return false;
};



// Test the isPowerOfThree function
console.log(isPowerOfThree(n));
