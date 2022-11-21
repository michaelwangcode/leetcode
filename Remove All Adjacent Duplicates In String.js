//----- QUESTION -----//

// You are given a string s consisting of lowercase English letters. 
// A duplicate removal consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. 



//----- SOLUTION -----//

// Iterate through the string and use a stack to keep track of letters.
// If the current letter in the string is equal to the top letter in the stack, remove the letter from the stack.
// Otherwise, add the current letter to the stack.
// Lastly, return the stack converted to a string.



// Input: A string of letters
let s = "abbaca";



// This function removes adjacent duplicates from a string
const removeDuplicates = function(s) {
    
  // Create a stack array
  let stack = [];
  
  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
      
    // If the current letter is the same as the one at the end of the stack,
    if (s[i] === stack[stack.length - 1]) {
        
      // Remove the letter from the stack
      stack.pop();

    // Otherwise,
    } else {

      // Push the current letter to the stack
      stack.push(s[i]);
    }
  }
  
  // Return the stack as a string
  return stack.join("");
};



// Test the removeDuplicates function
console.log(removeDuplicates(s));
