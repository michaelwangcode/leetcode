//----- QUESTION -----//

// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. 
// The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, 
// return true if and only if the given words are sorted lexicographically in this alien language.



//----- SOLUTION -----//

// Compare words 1 and 2
// If word 1 comes after word 2 in the dictionary, return false
// Repeat this for all of the words in the list

// To see if word 1 comes before or after word 2, iterate through the letters of word 1 and 2 using a while loop
// As long as the characters are the same, keep iterating
// If a character in word 1 comes after a character in word 2, return false

// If the first word is longer and contains the second word (apple, app), return false
// Otherwise, return true



// Input: An array of words and a string
const words = ["hello","leetcode"];
const order = "hlabcdefgijkmnopqrstuvwxyz";



// This function returns true if all words are in alphabetical order in the alien language
const isAlienSorted = function(words, order) {
  
  // Iterate through words array
  for (let i = 1; i < words.length; i++) {
      
    // Store word 1 and word 2
    let word1 = words[i-1];
    let word2 = words[i];
      
    // Get the length of the shortest word
    let shortestWordLength = Math.min(word1.length, word2.length);
      
    // Iterate through letters in word
    for (let i = 0; i < shortestWordLength; i++) {

      // If first letter value is greater than second letter value, return false
      if (order.indexOf(word1[i]) > order.indexOf(word2[i])) {
        return false;
      
      // Otherwise if word 1 comes before word 2, break and move on to the next word
      } else if (order.indexOf(word1[i]) < order.indexOf(word2[i])) {
        break;
      }
    }
      
    // Edge case: If word 1 is longer than word 2 and includes the word (apple, app), return false
    if (word1.length > word2.length && word1.includes(word2)) {
      return false;
    }
  }
  
  // If all tests pass, return true
  return true;
};



// Test the isAlienSorted function
console.log(isAlienSorted(words, order));
