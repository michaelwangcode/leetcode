//----- QUESTION -----//

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
// '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.



//----- SOLUTION -----//

// Loop through each string and use a stack to keep track of the characters in each string.
// Then, convert both stack arrays to strings and compare the strings.



// Input: Two strings with backspace characters
let s = "ab#c"; 
let t = "ad#c";



// This function takes two strings with backspace characters, and returns true if both are equal.
const backspaceCompare = function(s, t) {
    
  // Create a stack for each string
  stack1 = [];
  stack2 = [];
  
  // Loop through the first string and add characters to the stack
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      stack1.pop();
    } else {
      stack1.push(s[i]);
    }
  }
  
  // Loop through the second string and add characters to the stack
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      stack2.pop();
    } else {
      stack2.push(t[i]);
    }
  }
  
  // Convert both arrays to strings
  stack1 = stack1.join("");
  stack2 = stack2.join("");

  // Return whether the two strings are equal
  return stack1 === stack2;
};



// Test the backspaceCompare function
console.log(backspaceCompare(s, t));
