//----- QUESTION -----//

// Write a program that converts a Roman numeral to an integer

// Note: There are a few cases where a smaller number can be placed before a larger number:
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.



//----- SOLUTION -----//

// Store all of the Roman numerals and their corresponding values in a hash map
// Iterate through the characters
// If a character is smaller than the character before it, 
// Otherwise, add the corresponding value to the result



// Input: A string of Roman Numerals
const s = "MCMXCIV";



// This function converts a Roman numeral to an integer
const romanToInt = function(s) {
    
  // Create a hash map for the Roman numerals
  let values = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  
  // Store the integer result
  let result = 0;

  // Iterate through the letters in the Roman numeral
  for (let i = 0; i < s.length; i++) {
    
    // If the current value is smaller than the next value (special case),
    if (values[s[i]] < values[s[i + 1]]) {

      // Subtract the current value from the result
      result -= values[s[i]];

    // Otherwise,
    } else {

      // Add the corresponding integer to the result variable
      result += values[s[i]];
    }
  }

  // Return the result variable
  return result;
};



// Test the romanToInt function
console.log(romanToInt(s));
