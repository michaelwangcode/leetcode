//----- QUESTION -----//

// Given a string s, find the first non-repeating character in it and return its index. 
// If it does not exist, return -1



//----- SOLUTION -----//

// Iterate though the characters and use a hash map to store duplicates
// Then, iterate through the characters again and return the first one without duplicates



// Input: A string of characters
const s = "loveleetcode";



// This function returns the first unique character in a string
const firstUniqChar = function(s) {
    
  // Create a hash map to track duplicate characters
  let hashMap = {};

  // Iterate through the characters of the string
  for (let char of s) {
    
    // If the character is not in the hash map
    if (hashMap[char] === undefined) {

      // Add it and set its value to false (no duplicate)
      hashMap[char] = false;

    // If the character is already in the hash map
    } else {

      // Set its value to true (yes duplicates)
      hashMap[char] = true;
    }
  }

  // Iterate through the indices of the string
  for (let i in s) {

    // If the letter in the hash map is false (no duplicates)
    if (hashMap[s[i]] === false) {

      // Return the index of the first non-duplicate letter
      return i;
    }
  }

  // Otherwise, return -1
  return -1;
};



// Test the firstUniqChar function
console.log(firstUniqChar(s));
