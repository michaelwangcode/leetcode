//----- QUESTION -----//

// You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. 
// In each round, you can complete either 2 or 3 tasks of the same difficulty level.
// Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

// Example:
// Input: tasks = [2,2,3,3,2,4,4,4,4,4]
// Output: 4

// Explanation: To complete all the tasks, a possible plan is:
// - In the first round, you complete 3 tasks of difficulty level 2. 
// - In the second round, you complete 2 tasks of difficulty level 3. 
// - In the third round, you complete 3 tasks of difficulty level 4. 
// - In the fourth round, you complete 2 tasks of difficulty level 4.  
// It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.



//----- SOLUTION -----//

// Use a hash map to store the number of tasks for each difficulty level
// Iterate through the hash map and calculate the rounds needed to complete each set of tasks
// If there is only 1 task, return -1
// Otherwise the minimum number of tasks for that round is: tasks/3 rounded up
// Add the tasks to the result and return the result at the end



// Input: An array of integers
const tasks = [2,2,3,3,2,4,4,4,4,4];



// This function returns the minimum rounds needed to complete all tasks
const minimumRounds = function(tasks) {
  
  // Create a hash map to store the amount of each task
  let hashMap = {};

  // Store the amount of each task in the hashMap
  for (let task of tasks) {
    if (hashMap[task] === undefined) {
      hashMap[task] = 1;
    } else {
      hashMap[task] += 1;
    }
  }

  // Store the total number of rounds needed to complete the tasks
  let result = 0;

  // Iterate through hashMap 
  for (let i in hashMap) {
    
    // Store the number of tasks for the current round
    let tasks;

    // If there is only 1 task, return -1 (tasks must be in groups of 2 or 3)
    if (hashMap[i] === 1) {
      return -1;
    }

    // Determine the minimum number of tasks for each round
    // Tasks can be completed in either groups of 2, or groups of 3 (but not 1)
    // The minimum number of tasks is the number of tasks / 3, rounded up
    tasks = Math.ceil(hashMap[i] / 3);

    // Add the tasks for this round to the total
    result += tasks;
  }
  
  // Return the total number of rounds
  return result;
};



// Test the minimumRounds function
console.log(minimumRounds(tasks));
