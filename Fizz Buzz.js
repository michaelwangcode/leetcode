//----- QUESTION -----//

// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.



//----- SOLUTION -----//

// Create an empty array
// Use a for loop to iterate from 1 to n and push the appropriate string to the array
// Return the array
// (Remember to convert integers to strings before pushing to the array)



// Input: An integer
const n = 15;



// This function returns an array of FizzBuzz related strings
const fizzBuzz = function(n) {
    
  // Create the array of strings
  let answer = [];
  
  // Iterate from 1 to n
  for (let i = 1; i <= n; i++) {
      
    // If the number is divisible by both 3 and 5,
    if (i % 3 === 0 && i % 5 === 0) {
        
      // Push "FizzBuzz" to the answer array
      answer.push("FizzBuzz");
        
    // If the number is divisible by 3,
    } else if (i % 3 === 0) {
        
      // Push "Fizz" to the answer array
      answer.push("Fizz");
        
    // If the number is divisible by 5,
    } else if (i % 5 === 0) {
        
      // Push "Buzz" to the answer array
      answer.push("Buzz");
        
    // Otherwise,
    } else {
        
      // Push i to the answer array as a String
      answer.push(String(i));
    }
  }
  
  // Return the answer array
  return answer;
};



// Test the fizzBuzz function
console.log(fizzBuzz(n));
