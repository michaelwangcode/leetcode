//----- QUESTION -----//

// You are given a string s of even length. Split this string into two halves of equal lengths, 
// and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
// Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.



//----- SOLUTION -----//

// Use left and right pointers to count vowels in each half of the string
// Use a hash map to keep track of all the lowercase vowels

// Iterate through the string and increment the vowel counters every time there is a vowel
// Return true if the vowel counts are equal



// Input: A string
const s = "book";



// This function returns true if the vowel count in both halves of a string are equal
const halvesAreAlike = function(s) {
    
  // Create the left and right pointers
  let left = 0;
  let right = s.length-1;
  
  // Store the vowel counts for each half
  let leftVowels = 0;
  let rightVowels = 0;
  
  // Store the vowels
  let vowels = {"a": true, "e": true, "i": true, "o": true, "u": true}
  
  // Iterate through the word
  while (left < right) {
      
    // If the left pointer is a vowel, increment the counter
    if (vowels[s[left].toLowerCase()]) {
      leftVowels++;
    }
      
    // If the right pointer is a vowel, increment the counter
    if (vowels[s[right].toLowerCase()]) {
      rightVowels++;
    }
    
    // Increment the left index and decrement the right index
    left++;
    right--;
  }
  
  // Return true if the left and right vowels are equal
  return leftVowels === rightVowels;
};



// Test the halvesAreAlike function
console.log(halvesAreAlike(s));


