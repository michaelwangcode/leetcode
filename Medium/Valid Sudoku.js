//----- QUESTION -----//

// Determine if a 9 x 9 Sudoku board is valid. 
// Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.



//----- SOLUTION -----//

// In Javascript, use a hash map to keep track of:
// All the numbers in a row
// All the numbers in a column
// All of the numbers in a square

// A square is a 3 by 3 sub-box where numbers cannot repeat.
// Each square has it's own row numbers (0-2) and column numbers (0-2).

// When we store row values in a hash map, we store them in the format ["row-value"]
// where row is the row number (0-8) and value is the number in that box (1-9).

// When we store column values in a hash map, we store them in the format ["column-value"]
// where column is the column number (0-8) and value is the number in that box (1-9).

// When we store square numbers in a hash map, we store them in the format ["xy-value"]
// where x is the square row (0-2) and y is the square column (0-2) and value is the number in that box.

// This way, we don't need a seperate hash map for each row/column/square etc, they all share one.

// Iterate through each value in the board and check if it already exists in a row, column or square.
// If so, return false.
// Periods can be ignored.
// If we check the entire board and there are no duplicates, return true.

// Video: https://www.youtube.com/watch?v=TjFXEUCMqI8
// Video (JavaScript): https://www.youtube.com/watch?v=Fev_BC5c-9M



// Input: A 2D array representing a sudoku board
const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];



// This function takes a sudoku board and returns true if it is valid
const isValidSudoku = function(board) {
    
  // Create hash maps for the rows, columns and squares
  let rowValues = {};
  let columnValues = {};
  let squareValues = {};
  
  // Iterate through all the row arrays
  for (let row = 0; row < 9; row++) {
    
    // Iterate through all of the column elements
    for (let col = 0; col < 9; col++) {
        
      // Store the value at the current position
      let value = board[row][col];
      
      // If the value is a period, ignore it and continue the next iteration of the loop
      if (value === ".") {continue;}
      
      // Calculate the ID of the large square the value is in and store it as a 2 character string
      let square = Math.floor(row/3) + "" + Math.floor(col/3);
      
      // If the value already exists in the row/column/square hash map, the board is not valid so return false
      if (rowValues[`${row}-${value}`]) {return false;}
      if (columnValues[`${col}-${value}`]) {return false;}
      if (squareValues[`${square}-${value}`]) {return false;}
      
      // Otherwise, add the row/column/square and value key to the appropriate hash map
      rowValues[`${row}-${value}`] = true;
      columnValues[`${col}-${value}`] = true;
      squareValues[`${square}-${value}`] = true;
    }
  }
  
  // If there are no invalid numbers, the board is valid so return true
  return true;
};



// Test the isValidSudoku function
console.log(isValidSudoku(board));
