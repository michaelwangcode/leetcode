//----- QUESTION -----//

// Given a string of letters and stars (*), remove a star and the character before it
// Return the string with all stars removed



//----- SOLUTION -----//

// Use a stack to keep track of the letters
// Loop through the string
// If the current character is a *, delete the previous character
// Otherwise, add the character to the stack
// Return the stack array converted to a string



// Input: A string of letters and star characters
const s = "leet**cod*e";



// This function removes stars and characters before stars from an array
const removeStars = function(s) {
    
  // Create a stack to hold letters
  let stack = [];
  
  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
      
    // If the letter is a "*"
    if (s[i] === "*") {

      // Remove the previous character from the stack
      stack.pop();

    // Otherwise,
    } else {

      // Add the character to the stack
      stack.push(s[i]);
    }
  }
  
  // Return the stack as a string
  return stack.join("");
};



// Test the removeStars function
console.log(removeStars(s));
