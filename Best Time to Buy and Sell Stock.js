//----- QUESTION -----//

// Given an array of stock prices (integers), return the maximum profit possible form the array of stock prices
// The index for a stock represents the day number
// A stock can be bought on a day and sold on a different day in the future



//----- SOLUTION -----//

// This can be solved using the two-pointer technique and one loop through the array
// Create a variable to hold the max profit
// Create a left and right pointer to keep track of indexes

// Iterate through the array using a while loop
// - If the right pointer is GREATER than the left pointer, calculate the profit and compare it to the max profit
// - Otherwise if the left pointer is equal or smaller than the right pointer, set the left pointer to the right pointer
// - Lastly, move the right pointer to the right by 1

// Video: https://www.youtube.com/watch?v=1pkOgXD63yU



// Input: An array of prices
const prices = [7, 1, 5, 3, 6, 4];



// This function takes an array of stock prices and returns the maximum profit possible
const maxProfit = function(prices) {
    
  // Store the maximum profit
  let maximumProfit = 0;

  // Store The left and right index pointers
  let left = 0;
  let right = 1;


  // While the right index pointer is less than the array length,
  while (right < prices.length) {

    // If the right price is greater than the left price,
    if (prices[right] > prices[left]) {

      // Calculate the profit and see if it is greater than the previous maximum profit
      maximumProfit = Math.max(prices[right]-prices[left], maximumProfit);

    // Otherwise if the right price is equal to or lower than the left price,
    } else {

      // Set the left index to the right index
      left = right;
    }

    // Move the right index along by 1
    right += 1;
  }


  // Return the maximum profit
  return maximumProfit;
};



// Test the maxProfit function
console.log(maxProfit(prices));
