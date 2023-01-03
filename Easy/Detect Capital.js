//----- QUESTION -----//

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".

// Given a string word, return true if the usage of capitals in it is right.



//----- SOLUTION -----//

// Use the toUpperCase() and toLowerCase() functions to easily compare strings.
// Use the slice(1) function to access the substring after the first letter.



// Input: A string
const word = "Google";



// This function returns true if a string is all uppercase, all lowercase or properly capitalized
const detectCapitalUse = function(word) {
    
  // Check if word is all capitals or all lowercase
  if (word === word.toUpperCase() || word === word.toLowerCase()) {
    return true;
  }

  // Check if first letter is capitalized and the rest lowercase
  if (word === word[0].toUpperCase() + word.slice(1).toLowerCase()) {
    return true;
  }

  // Otherwise return false
  return false;
};



// Test the detectCapitalUse function
console.log(detectCapitalUse(word));
