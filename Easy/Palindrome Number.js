//----- QUESTION -----//

// Given an integer x, return true if x is a palindrome, and false otherwise.



//----- SOLUTION -----//

// Convert the number to a string
// Create two pointers, one from the left and one from the right
// Iterate from both directions and return false if the pointers are unequal



// Input: An integer
let x = 12321;



// This function returns true if a number is a palindrome
const isPalindrome = function(x) {
  
  // Convert the number to a string
  let num = String(x);
  
  // Create the left and right pointers
  let left = 0;
  let right = num.length - 1;
  
  // Iterate with the left and right pointers
  while (left <= right) {
      
    // If the left number is not equal to the right number,
    if (num[left] !== num[right]) {

      // The number is not a palindrome, return false
      return false;
    }
    
    // Move the left pointer forwards
    left++;

    // Move the right pointer backwards
    right--;
  }
  
  // Return true if the number is a palindrome
  return true;
};



// Test the isPalindrome function
console.log(isPalindrome(x));
