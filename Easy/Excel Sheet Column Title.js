//----- QUESTION -----//

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.



//----- SOLUTION -----//

// We can convert a number in base 10 to an excel column (base 26) by repeatedly dividing by 26 and saving the remainder.

// Get the remainder of the number when divided by 26
// Then, save the remainder and convert it to a letter using
// Add the letter to the front of the results string
// Then, divide the number by 26

// Note: Use (number - 1) to handle cases where the remainder would be 0



// Input: An integer
const columnNumber = 701;



// This function converts a column number to an excel column title
const convertToTitle = function(columnNumber) {
    
  // Store the resulting string
  let result = "";

  // Store the column number
  let number = columnNumber;


  // While number is larger than 0,
  while (number > 0) {
    
    // Calculate the remainder when the number -1 is divided by 26
    // Node: 1 is subtracted from the number to handle cases where the remainder is 0
    let remainder = (number - 1) % 26;

    // Convert the remainder from an integer to a letter
    let letter = String.fromCharCode("A".charCodeAt(0) + remainder);

    // Add the letter to the front of the results string
    result = letter + result;

    // Use integer division to divide the number - 1 by 26
    number = Math.floor((number - 1) / 26);
  }

  // Return the result
  return result;
};



// Test the converToTitle function
console.log(convertToTitle(columnNumber));
