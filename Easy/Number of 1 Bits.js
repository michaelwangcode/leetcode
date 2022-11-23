//----- QUESTION -----//

// Write a function that takes an unsigned integer and returns the number of '1' bits it has 
// (also known as the Hamming weight).



//----- SOLUTION -----//

// Loop through the digits and return the number of 1's.

// Note: We need to convert the input to a binary string
// The leading 0's are removed but it doesn't matter since we are counting 1's



// Input: A 32-digit binary number
let n = 00000000000000000000000000001011;



// This function returns the number of 1's in a number
const hammingWeight = function(n) {

  // Convert integer to binary string
  n = n.toString(2);

  // Keep track of the number of 1's
  let numberOfOnes = 0;
      
  // Loop through the number
  for (let digit of n) {
    
    // If the digit is a 1,
    if (digit === "1") {

      // Increment the counter
      numberOfOnes++;
    }
  }
  
  // Return the number of 1's
  return numberOfOnes;
};



// Test the hammingWeight function
console.log(hammingWeight(n));
