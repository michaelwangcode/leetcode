//----- QUESTION -----//

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.



//----- SOLUTION -----//

// If the number is 0 or negative, it is not an ugly number so return false.

// To check if the only prime factors are 2, 3, and 5, 
// continuously divide the number by 2, then 3, then 5 until you can't any further.

// If the number is 1, there are no other prime factors so it is an ugly number; return true.
// Otherwise, there are still more factors so return false.



// Input: An integer
let n = 6;



// This function returns true if n is an ugly number
const isUgly = function(n) {

  // If n is 0 or negative return false
  if (n <= 0) {
      return false;
  }
  
  // For each number in 2, 3, and 5,
  for (i of [2, 3, 5]) {

    // Divide the number by 2, 3, and 5 until you can't anymore
    while (n % i === 0) {

      // Save the new value of n
      n = n / i;
    }
  }
  
  // If 1 is the only number left return true, otherwise false
  return n === 1;
};



// Test the isUgly function
console.log(isUgly(n));

