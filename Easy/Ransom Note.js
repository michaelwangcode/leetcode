//----- QUESTION -----//

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.



//----- SOLUTION -----//

// Store the letters of the magazine in a hash map

// Iterate through the letters of the ransom note
// If the letter does not exist in the hash map or the value is 0, return false
// Otherwise, decrease the value of the letter in the hash map by 1



// Input: Two strings
const ransomNote = "send me one dollar"
const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."



// This function returns true if all of the ransomNote letters are present in magazine
const canConstruct = function(ransomNote, magazine) {
    
  // Create a hash map
  let hashMap = {};
  
  // Add all of the letters in magazine to the hash map
  for (let letter of magazine) {
    if (hashMap[letter] === undefined) {
      hashMap[letter] = 1;
    } else {
      hashMap[letter] += 1;
    }
  }
  
  // Iterate through the letters in the ransom note
  for (let letter of ransomNote) {

    // If the letter doesn't exist in the hash map or its value is 0, return false
    if (hashMap[letter] === undefined || hashMap[letter] === 0) {
      return false

    // Otherwise, subtract 1 from the value
    } else {
      hashMap[letter] -= 1;
    }
  }
  
  // Return true if all of the ransom note letters are present in magazine
  return true;
};



// Test the canConstruct function
console.log(canConstruct(ransomNote, magazine));
