//----- QUESTION -----//

// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3^x.



//----- SOLUTION -----//

// Iterate from 0 to 19 as x and see if the number is equal to 3^x
// We only need to do the first 20 integers because the value of 3^x grows very fast



// Input: An integer
let n = 27;



// Return if the number is a power of three
const isPowerOfThree = function(n) {
    
  // Return true if n is 1 because 3^0 is 1
  if (n === 1) return true;
  
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
  
  // Otherwise n is not a product of 3 so return false
  return false;
};



// Test the isPowerOfThree function
console.log(isPowerOfThree(n));
