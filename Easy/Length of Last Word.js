//----- QUESTION -----//

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.



//----- SOLUTION -----//

// Trim the string of leading and trailing spaces
// Iterate from back to front until you find a space
// Return the length of the last word



// Input: A string of spaces and letters
const s = "   fly me   to   the moon  ";



// This function returns the length of the last word in a string
const lengthOfLastWord = function(s) {
    
  // Trim the string to remove leading and trailing spaces
  s = s.trim();

  // Index
  let i;
  
  // Iterate from back to front
  for (i = s.length-1; i >= 0; i--) {
      
    // If a space is found, exit the loop
    if(s[i] === " ") {
      break;
    }
  }
  
  // Return the length of the word
  return s.length-1 - i;
};



// Test the lengthOfLastWord function
console.log(lengthOfLastWord(s));

