//----- QUESTION -----//

// Given an array of strings, return the longest common prefix for all the strings
// Example: ["flower","flow","flight"] returns "fl"



//----- SOLUTION -----//

// Choose any string in the array (we choose the first one) and start iterating through all of its characters
// Use a nested loop to iterate through all the strings in the array
// If any string's current letter does not equal the same letter for the first string, exit the function and return the prefix
// Otherwise, add the letter to the prefix and move on to the next letter

// Video: https://www.youtube.com/watch?v=0sWShKIJoo4



// Input: An array of strings
const strs = ["flower", "flow", "flight"];



// This function returns the longest common prefix for an array of strings 
const longestCommonPrefix = function(strs) {
    
  // Store the prefix
  let prefix = "";
  
  // Iterate through the letters of the first string
  for (let i = 0; i < strs[0].length; i++) {
      
      // Iterate through every other string in the array
      for(let str of strs) {
          
          // If the current index exceed's the string's length, or
          // If the current string's character is not the same as the first string's character (at index i)
          if (i === str.length || str[i] !== strs[0][i]) {
              
              // Return the prefix string
              return prefix;
          }          
      }
      
      // If every single string contains that same letter at index i, add it to the prefix string
      prefix += strs[0][i];
  }
  
  // Return the prefix
  return prefix;
};



// Test the longestCommonPrefix function
console.log(longestCommonPrefix());
