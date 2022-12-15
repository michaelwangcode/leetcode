//----- QUESTION -----//

// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed.
// You are not allowed to rob consecutive houses because it will trigger an alarm.

// Given an integer array nums representing the amount of money of each house, 
// return the maximum amount of money you can rob tonight without alerting the police.



//----- SOLUTION -----//

// Calculate the maximum money at the current house
// This is equal to Math.max(num + prev2, prev1)
// where prev2 is two houses before and prev1 is one house before 

// For the array [2,7,9,3,1], the max is 12 (2+9+1)

// Video: https://www.youtube.com/watch?v=73r3KWiEvyk
// Note: Variable names are slightly different in the video



// Input: An array of integers representing money in each house
const nums = [2,7,9,3,1];



// This function returns the maximum money you can get by robbing houses
const rob = function(nums) {

  // Prev1 and 2 store the two nums before the current number: [prev2, prev1, num, num+1...]
  // They are initially set to 0
  let prev1 = 0;
  let prev2 = 0;
  let current;

  // Loop through the array of numbers from first to last
  for (let num of nums) {
    
    // Calculate the current value using the values of rob1 and rob2
    current = Math.max(num + prev2, prev1);

    // Set rob1 to the value after it
    prev2 = prev1;

    // Set rob2 to the value after it
    prev1 = current;
  }

  // Return the current value
  return current;
}



// Test the rob function
console.log(rob(nums));
