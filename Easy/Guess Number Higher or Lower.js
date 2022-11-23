//----- QUESTION -----//

// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).

// Return the number that I picked.



//----- SOLUTION -----//

// Use binary search to find the secret number
// Call the built-in guess() function on the middle value to see if it is high or low
// Note: The predefined guess function is only available on the leetcode page



// This function returns the secret number
const guessNumber = function(n) {
  
  // Set the left, right and middle pointers
  let left = 1;
  let right = n;
  let middle;

  // Store the result of the guess function (0, -1, 1)
  let result;
  
  // Loop until the value is found
  while (left <= right) {
      
    // Calculate the middle value
    middle = Math.floor((left + right) / 2);   
    
    // Calculate the result (0, 1, -1)
    result = guess(middle);
    

    // If the result is 1 (guess too low),
    if (result === 1) {

      // Set the left pointer
      left = middle + 1;

    // If the result is -1 (guess too high)
    } else if (result === -1) {
      
      // Set the right pointer
      right = middle - 1;

    // If the result is 0 (guess is correct)
    } else if (result === 0) {
      
      // Return the middle pointer
      return middle;
    }
  }
};

