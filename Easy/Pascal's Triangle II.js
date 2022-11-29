//----- QUESTION -----//

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif

// Could you optimize your algorithm to use only O(rowIndex) extra space?



//----- SOLUTION -----//

// To do this with constant space, 
// the trick is to push a 1 to the result array before calculating the next row of values

// 1. Create a result array starting with [1]
// 2. Iterate from 1 to rowIndex
// 3. Push a 1 to the end of the array
// 4. In an inner loop, iterate backwards from result.length-2 to 1 to calculate all the inner numbers
// Note: We iterate from the back because the push(1) function adds values from the back

// Video: https://www.youtube.com/watch?v=Ij7zEqyLfhA



// Input: An integer that represents the row in Pascal's triangle to calculate
const rowIndex = 100;



// This function return the given row of Pascal's Triangle
const getRow = function(rowIndex) {
    
  // Set the result array to the first row of Pascal's Triangle
  let result = [1];

  // Iterate from row 1 to rowIndex
  for (let i = 1; i <= rowIndex; i++) {
      
    // Add the 
    result.push(1);
    
    // Iterate backwards from the second last element
    for (let j = result.length-2; j > 0; j--) {
        
      // Set the element to the sum of itself and the previous element
      result[j] += result[j-1];
    }
  }
  
  // Return the result array
  return result;
};



// Test the getRow function
console.log(getRow(rowIndex));
