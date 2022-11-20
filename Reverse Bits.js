//----- QUESTION -----//

// Reverse bits of a given 32 bits unsigned integer.



//----- SOLUTION -----//

// Convert the input to a string, reverse the string and convert it back to an integer in base 2. 

// Note: The input needs to be converted to a string before reversing.
// Leading zeroes are cut off an will need to be re-added.



// Input: A 32-digit binary number
let n = 00000010100101000001111010011100;



// This function reverses the digits in a 32-digit binary number
const reverseBits = function(n) {

  // Convert integer to binary string, leading zeroes get removed
  let num = n.toString(2);
  
  // Add zeroes to the front of the binary string
  // Calculate the number of zeroes to be added
  let zeroesAtFront = 32 - num.length;

  // Store a string of zeroes
  let zeroes = ""

  // Iterate through the number of zeroes
  for (let i = 0; i < zeroesAtFront; i++) {
      
    // Add the zeroes to the string
    zeroes += 0;
  }
  
  // Add the zeroes to the front of the string
  num = zeroes + num;
  
  // Create the reversed string
  let reversed = "";
  
  // Iterate through the string from back to front to reverse it
  for (let i = num.length - 1; i >= 0; i--) {
      
    // Add the current character to the reversed string
    reversed += num[i];
  }
  
  // Convert the reversed string to a number in base 2
  reversed = parseInt(reversed, 2);
  
  // Return the reversed string
  return reversed;
};



// Test the reverseBits function
console.log(reverseBits(n));
