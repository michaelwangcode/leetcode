//----- QUESTION -----//

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



//----- SOLUTION -----//

// Use a regular expression (regex) to remove all letters that are not letters or numbers
// Use left and right pointers to iterate through the resulting string and check each letter
// If the left and right letters are ever different, return false
// Otherwise, return true



// Input: A string
let s = "A man, a plan, a canal: Panama";



// This function returns true if a string is a palindrome (with punctuation removed)
const isPalindrome = function(s) {
    
  // Use a regular expression (regex) to remove all characters that aren't letters or numbers
  // Convert all of the letters to lowercase
  let lettersOnly = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
  
  // Create the left and right pointers
  let left = 0;
  let right = lettersOnly.length - 1;
      
  // Iterate through the string from both ends
  while(left <= right) {
      
    // If the left and right characters are not equal,
    if(lettersOnly[left] !== lettersOnly[right]) {

      // The string is not a palindrome so return false
      return false;
    }
    
    // Move the left pointer forwards and the right pointer backwards
    left++;
    right--;
  }
  
  // The string is a palindrome so return true
  return true;
};



// Test the isPalindrome function
console.log(isPalindrome(s));
