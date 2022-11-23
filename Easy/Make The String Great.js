//----- QUESTION -----//

// Given a string of letters, remove any consecutive pairs of letters that are upper/lower case versions of each other
// Example: 
// "leEeetcode" returns "leetcode"
// "abBAcC" returns ""



//----- SOLUTION -----//

// Create a stack to hold the letters in the word
// Iterate through the letters in the string
// If the current letter is an upper/lower case version of the top letter in the stack, remove the letter from the stack
// Otherwise, add the letter to the stack

// NOTE: 
// To check if two letters are upper/lower case version of each other (a A), we can use the simple expression:
// char1 !== char2 && char1.toLowerCase() === char2.toLowerCase()
// There is no need to write helper functions



// Input: A string
const s = "leEeetcode";



// This function returns a new string with consecutive lowercase/uppercase characters removed
const makeGood = function(s) {
  
  // Create a stack to track each letter
  // Add a buffer "" string element to avoid out of bounds errors on the first loop
  let stack = [""];
  
  // Iterate through each character in s
  for (let char of s) {

    // Store the top (last) character in the stack
    let top = stack[stack.length - 1];

    // If it's not the first letter, and the letter is lowercase, and the stack contains its uppercase version,
    if (top != char && top.toLowerCase() === char.toLowerCase()) {
    
      // Remove the uppercase letter from the stack
      stack.pop();

    // Otherwise,
    } else {
    
      // Add the letter to the stack
      stack.push(char);
    }
  }
  
  // Return the stack as a string using the join function
  return stack.join("");
};



// Test the makeGood function
console.log(makeGood(s));
