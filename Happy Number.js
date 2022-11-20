//----- QUESTION -----//

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:
// - Starting with any positive integer, replace the number by the sum of the squares of its digits.
// - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// - Those numbers for which this process ends in 1 are happy.



//----- SOLUTION -----//

// Create a helper function that returns the sum of a number's digits squared

// Use a while loop to loop through the numbers
// To detect whether a number results in a loop, use a hash map to store numbers
// If the same number appears twice in the hash map, return false (not a happy number)
// If the number turns into a 1, return true (happy number)



// Input: An integer
let n = 19;



// This function returns whether a number is a happy number
const isHappy = function(n) {
    
  // Use a hash map to store whether a number has been seen or not
  let hashMap = {};

  // Use a while loop
  while (true) {

    // Set the number to the sum of its digits squared
    n = sumOfDigitsSquared(n);

    // If the number is not in the hash map,
    if (hashMap[n] === undefined) {

      // Add it to the hash map
      hashMap[n] = true;

    // If the is in the hash map, there is a loop
    } else {

      // Return false (not a happy number)
      return false;
    }

    // If the number is ever equal to 1,
    if (n === 1) {

      // Return true (it is a happy number)
      return true;
    }
  }
};



// This helper function calculates the sum of a number's digits squared
function sumOfDigitsSquared(num) {

  // Convert the number to a string
  let string = String(num);

  // Store the sum of the squared digits
  let result = 0;

  // Loop through every digit in the number string
  for (let digit of string) {

    // Add the sum of the digit squared by converting the digit to an integer
    result += parseInt(digit)**2;
  }

  // Return the result
  return result;
}



// Test the isHappy function
console.log(isHappy(n));
