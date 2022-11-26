//----- QUESTION -----//

// Given an integer numRows, return the first numRows of Pascal's triangle.

// Example: Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Diagram of Pascal's triangle: 
// https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif



//----- SOLUTION -----//
 
// Set a results array with the first row: [[1]]
// Loop through the remaining rows and calculate the value for each element.
// Each element will begin and end with the number 1.
// The middle numbers are calculated by adding consecutive numbers.
 


// Input: An integer representing the number of rows of Pascal's triangle
const numRows = 10;



// This function returns the first numRows of Pascal's triangle
const generate = function(numRows) {
  
  // Create a results array with the first row
  result = [[1]];
  
  // Iterate through the remaining rows starting from 1
  for(let i = 1; i < numRows; i++) {
    
    // Create a subarray containing the number 1
    let element = [1];
    
    // Store the previous subarray
    let previousElement = result[i - 1];

    // Iterate through the subarray
    for (let j = 1; j < previousElement.length; j++) {

      // Calculate values using the previous subarray
      element.push(previousElement[j-1] + previousElement[j]);
    }
    
    // Add 1 to the end of the subarray
    element.push(1);

    // Add the subarray to the result array
    result.push(element);
  }
  
  // Return the results array
  return result;
};



// Test the generate function
console.log(generate(numRows));
