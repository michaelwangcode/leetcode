//----- QUESTION -----//

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



//----- SOLUTION -----//

// Convert the string to an array
// Iterate through the array and store the vowels in an array
// Iterate through the array forwards and the vowels array in reverse, and replace each vowel
// Return the array as a string



// Input: A string
const s = "leetcode";



// This function returns a string with the vowels reversed
const reverseVowels = function(s) {

  // Convert the string to an array
  let array = s.split('');
  let vowels = [];

  // Store all vowels in a hashmap
  let hashMap = {"a": true, "e": true, "i": true, "o": true, "u": true,
                 "A": true, "E": true, "I": true, "O": true, "U": true,};

  // Iterate through the word array
  for (let i = 0; i < array.length; i++) {

    // If the current character is a vowel,
    if (hashMap[array[i]]) {

      // Push it to the vowels array
      vowels.push(array[i])
    }
  }

  // Set the index j to go from back to front in the vowels array
  let j = vowels.length - 1;

  // Iterate through the word array
  for (let i = 0; i < array.length; i++) {

    // If the current character is a vowel,
    if (hashMap[array[i]]) {

      // Replace it with the vowel in the vowels array from the back
      array[i] = vowels[j];

      // Decrement the vowels index
      j--;
    }
  }

  // Return the array as a string
  return array.join('')
};



// Test the reverseVowels function
console.log(reverseVowels(s));
