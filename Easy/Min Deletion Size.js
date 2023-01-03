//----- QUESTION -----//

// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid. 
// For example, strs = ["abc", "bce", "cae"] can be arranged as:
// abc
// bce
// cae

// You want to delete the columns that are not sorted lexicographically. 
// In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1.
// Return the number of columns that you will delete.



//----- SOLUTION -----//

// Use two for loops to compare letters
// The first for loop iterates through the columns of a string (from 0 to string length)
// The second for loop iterates through the rows of a string, from the first string to the last
// If a letter in a column is larger than the letter that comes after it, the row needs to be deleted
// Increment the deletion counter and move on to the next column



// Input: An array of strings with the same length
const strs = ["cba","daf","ghi"];



// This function returns the number of columns that are not in alpnabetical order
const minDeletionSize = function(strs) {

  // Store the number of rows to be deleted
  let count = 0;

  // Iterate through the columns
  for (let col = 0; col < strs[0].length; col++) {

    // Iterate through the rows
    for (let row = 0; row < strs.length - 1; row++) {
      
      // If a letter is greater than the next letter in the column
      if (strs[row][col] > strs[row+1][col]) {

        // Increment the counter
        count++;

        // Move to the next column
        break;
      }
    }
  }

  // Return the count
  return count;
};



// Test the minDeletionSize function
console.log(minDeletionSize(strs));
