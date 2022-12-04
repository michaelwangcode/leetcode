//----- QUESTION -----//

// Given a string s, sort it in decreasing order based on the frequency of the characters. 
// The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.



//----- SOLUTION -----//

// Use a hash map to store all the letters in the string

// Iterate through the hash map and store the letter with the max value, and add it to a result string
// Then, delete the letter with the max value from the hashmap
// Repeat this process until there are no more letters in the hashmap



// Input: A string
const s = "cccaaaAbbAd";



// This function returns a string sorted in decreasing order based on frequency of letters
const frequencySort = function(s) {
    
    
  // Use a hash map to get all the letters and their frequency
  let hashMap = {};
  
  // Add the letters to the hash map
  for (let letter of s) {
    if (hashMap[letter] === undefined) {
      hashMap[letter] = 1;
    } else {
      hashMap[letter] += 1;
    }
  }
  

  // Create a result string
  result = ""
  

  // Iterate through the hash map
  while (Object.keys(hashMap).length > 0) {
  
    // Store all of the hashMap values in an array
    let arr = Object.values(hashMap);

    // Use the spread operator to get the max value in the array
    let max = Math.max(...arr);


    // Iterate through the hash map to find the letter with the max occurrences
    for (let key in hashMap) {

      // If the letter has the max occurrences,
      if (hashMap[key] === max) {

        // Add the letters to the result string equal to the number of occurrences
        for (let i = 1; i <= max; i++) {
          result += key;
        }

        // Delete the key from the hash map
        delete hashMap[key];
      }
    }   
  }
  
  // Return the result string
  return result;
};



// Test the frequencySort function
console.log(frequencySort(s));
