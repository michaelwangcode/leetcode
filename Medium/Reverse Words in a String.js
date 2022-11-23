//----- QUESTION -----//

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. 
// The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.



//----- SOLUTION -----//

// Convert the string to an array using the .split(" ") function and remove extra spaces
// Use a left and right pointer to iterate through the string and swap values
// Convert the array back to a string using the .join(" ") function and return it



// Input: A string
let s = "the sky is blue";



// This function reverses a string
const reverseWords = function(s) {

  // Convert the string to an array
  const array = s.replace(/\s+/g, " ").trim().split(" ");
  
  // Set the left and right pointers
  let left = 0;
  let right = array.length-1;
  
  // Iterate through the array from left and right
  while (left < right) {
      
    // Swap the left and right values
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
      
    // Move the left pointer forwards and the right index backwards
    left++;
    right--;
  }

  // Convert the array to a string and return it
  return array.join(" ");
};



// Test the reverseWords function
console.log(reverseWords(s));
