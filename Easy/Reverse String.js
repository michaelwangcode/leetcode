//----- QUESTION -----//

// Given a string (as an array of characters), reverse the string in-place
// You can only use O(1) in storage space



//----- SOLUTION -----//

// Iterate through the array using a while loop
// Use left and right index pointers to swap the letters
// Increase the left pointer and decrease the right pointer until all letters are swapped



// Input: An array of letters
let s = ["H", "e", "l", "l", "o"];



// This function reverses an array and returns it
const reverseString = function(s) {
  
  // Store the left and right index pointers
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  // While the left index is smaller than the right index,
  while(leftIndex < rightIndex) {

    // Store the left letter in a temporary variable
    let temp = s[leftIndex];

    // Set the left letter to the right letter
    s[leftIndex] = s[rightIndex];

    // Set the right letter to the temporary left letter
    s[rightIndex] = temp;

    // Move the left index forward by 1
    leftIndex += 1;

    // Move the right index back by 1
    rightIndex -= 1;
  }

  // Return the reversed array
  return s;
};



// Test the reverseString function
console.log(reverseString(s));

