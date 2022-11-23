//----- QUESTION -----//

// Given a string of parentheses, return true if the string is valid
// Each opening bracket must have a corresponding closing bracket, in the correct order



//----- SOLUTION -----//

// A valid string must start with one or more opening brackets
// Use a stack (array) to keep track of the opening and closing parentheses
// Iterate through the array
// When an opening bracket is found, add it to the stack
// When a closing bracket is found, check if there is a matching opening bracket
// If so, remove it from the stack
// Otherwise, return false because the parentheses are not valid

// Video: https://www.youtube.com/watch?v=WTzjTskDFMg



// Input: A string of parentheses
let s = "{{}}()[()]";



// This function returns true if a set of brackets is valid
var isValid = function(s) {
    
  // Create a stack (array) to track parentheses
  let stack = [];

  // Store the opening pair of each parentheses in a hash map
  let openingPair = {
    ")": "(",
    "]": "[",
    "}": "{"
  }

  // Iterate through the string of parentheses
  for (let i = 0; i < s.length; i++) {

    // If the current bracket is an opening bracket,
    if (s[i] === "(" || s[i] === "[" || s[i] === "{" ) {

      // Push it to the stack
      stack.push(s[i]);

    // If the current bracket is a closing bracket,
    } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {

      // Check if there is a corresponding opening bracket
      if (stack[stack.length-1] === openingPair[s[i]]) {

        // If so, pop the open bracket from the stack
        stack.pop();

      // Otherwise,
      } else {

        // The string is invalid, return false
        return false;
      }
    }
  }

  // If the stack is empty (no unpaired opening brackets)
  if (stack.length === 0) {

    // Return true
    return true;

  // Otherwise,
  } else {

    // Return false
    return false;
  }
};



// Test the isValid function
console.log(isValid(s));
