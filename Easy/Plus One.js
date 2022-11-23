//----- QUESTION -----//

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.



//----- SOLUTION -----//

// Loop through the digits from back to front
// If the digit is less than 9, add 1 to the last digit in the array and return the number
// If the digit is a 9, set it to 0
// The loop continues by adding 1 to the next digit

// Edge case: If at the very end the first number is 0, change it to a 1 and push a 0 to the end
// This is needed for numbers with all 9's like 999



// Input: An array of integers representing a number
let digits = [1, 2, 3];
let digits2 = [9, 9, 9, 9];



// This function adds 1 to an array representing a number
const plusOne = function(digits) {

  // Iterate through the digits from back to front
  for (let i = digits.length - 1; i >= 0; i--) {
      
    // If the digit is 8 or less,
    if (digits[i] <= 8) {
        
      // Add 1 to the last digit
      digits[i] += 1;

      // Return the digits array
      return digits;
        
    // If the digit is 9,
    } else if (digits[i] === 9) {
        
      // Set the digit to 0 and the loop will continue
      digits[i] = 0;
    } 
  }
  
  // If at the very end the first number is 0,
  if (digits[0] === 0) {

    // Set the first digit to 1
    digits[0] = 1;

    // Add a 0 to the end of the array
    digits.push(0);
  }
  
  // Return the digits array
  return digits
};



// Test the plusOne function
console.log(plusOne(digits));
console.log(plusOne(digits2));
