//----- QUESTION -----//

// Given a number consisting of only 6's and 9's,
// Return the largest number you can by replacing one 6 with 9



//----- SOLUTION -----//

// Convert the number to a string and replace the first occurence of 6 with 9



// Input: An integer with 6's and 9's
const num = 9669;



// This function replaces the first 6 with a 9
const maximum69Number = function(num) {
    
  // Convert the number to a string
  numString = String(num);
  
  // Store the result as a new string (since strings are immutable)
  let result = "";
  
  // Create a boolean to detect when a 6 is found
  let sixFound = false;
  

  // Iterate through the number string
  for (let i = 0; i < numString.length; i++) {
      
    // If a 6 is detected,
    if (numString[i] === "6" && !sixFound) {
        
      // Add a 9 to the end of the string
      result += "9";
      
      // Set the tracking variable to true
      sixFound = true;
    
    // Otherwise,
    } else {
    
      // Add the digit to the result
      result += numString[i];
    }
  }
  
  // Return the result as an integer
  return parseInt(result);
};



// Test the maximum69Number function
console.log(maximum69Number(num));
