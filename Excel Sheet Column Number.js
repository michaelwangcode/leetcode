//----- QUESTION -----//

// Given an excel column title, return its corresponding column number.

// For example:
// A -> 1, B -> 2, C -> 3, ... Z -> 26
// AA -> 27, AB -> 28, AC -> 29, ... AZ -> 52



//----- SOLUTION -----//

// An excel column title is basically a number in base 26
// There are 26 possible digits (letters) that can make up a number

// Example in base 10: Number 123
// 123 = 10^2 * 1 + 10^1 * 2 + 10^1 * 3

// Example in base 26: Column ABC
// ABC = 26^2 * 1 + 26^1 * 2 + 26^0 * 3 = 731 in base 10

// Going left to right, the exponent increases by 1 every time (0 to 2)
// Going left to right, the "index" decreases by 1 every time (3 to 1)



// Input: A column title string
let columnTitle = "ABC";



// This function converts an excel column title string to a number
const titleToNumber = function(columnTitle) {
  
  // The result stores the column as a number (in base 10)
  let result = 0;

  // The exponent is the exponent for 26 (26^exponent)
  let exponent = 0;

  // The index is the number the exponent is multiplied by
  let index = columnTitle.length - 1;
  

  // Loop through all of the letters of the column string from back to front (exponent = 0)
  while(exponent <= columnTitle.length - 1) {
      
    // Calculate the character code (integer) by subtracting the current character 
    let charCode = columnTitle[index].charCodeAt(0) - "A".charCodeAt(0) + 1;

    // Convert the current letter to an integer and add it to the result
    result += Math.pow(26, exponent) * charCode;
      
    // Increase the exponent by 1
    exponent++;

    // Decrease the index by 1
    index--;
  }
  
  // Return the resulting number
  return result;
};



// Test the titleToNumber function
console.log(titleToNumber("ABC"));
