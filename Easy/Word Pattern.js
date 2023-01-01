//----- QUESTION -----//

// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false



//----- SOLUTION -----//

// Split the string into an array.
// Check to make sure the pattern and string are the same length.

// Use two hash maps to track each corresponding letter and string:
// Hash Map 1 has a letter as a key and a word as the value
// Hash Map 2 has a word as the key and a letter as the value

// Iterate through the pattern and string
// If the letter is in hashMap1 but it's a different word, return false
// If the word is in hashMap2 but it's a different letter, return false
// Otherwise, add the letter and word to both hash maps
// At the end, return true (pattern and string are valid)

// Video: https://www.youtube.com/watch?v=W_akoecmCbM



// Input: A pattern string and a string of words
const pattern = "abba";
const s = "dog cat cat dog";



// This function returns true if the pattern and string follow the same pattern
const wordPattern = function(pattern, s) {
    
  // Convert the string into an array
  let array = s.split(" ");

  // If the pattern and array length are different, return false
  if (pattern.length !== array.length) {
    return false;
  }

  // Create a hash map for the letter to string
  let hashMap1 = {};

  // Create a hash map for the string to letter
  let hashMap2 = {};

  // Iterate through the pattern and string
  for (let i = 0; i < pattern.length; i++) {

    // Store the current letter and word
    let letter = pattern[i];
    let word = array[i];

    // If the letter is in hashMap1 but the word does not match, return false
    if (hashMap1[letter] !== undefined && hashMap1[letter] !== word)  {
      return false;
    }

    // If the word is in hashMap2 but the letter does not match, return false
    if (hashMap2[word] !== undefined && hashMap2[word] !== letter)  {
      return false;
    }

    // Otherwise, add the letter and word to both hash maps
    hashMap1[letter] = word;
    hashMap2[word] = letter;
  }

  // Return true, meaning the pattern and string are valid
  return true;
};



// Test the wordPattern function
console.log(wordPattern(pattern, s));
