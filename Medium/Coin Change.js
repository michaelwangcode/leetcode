//----- QUESTION -----//



//----- SOLUTION ------//



// Input: 




// This function returns the minimum number of coins needed for a given amount
const coinChange = function(coins, amount) {

  // Create an array to hold the lowest number of coins needed for that index
  // Base case: dp[0] = 0
  let dp = [0];

  // Fill the rest of the array with a max number
  for (let i = 1; i < amount + 1; i++) {

    // 'amount + 1' is used to represent a maximum number
    dp.push(amount+1);
  }


  // Iterate through the dp array
  for (let a = 1; a < amount +1; a++) {

    // Iterate through the coin denominations
    for (let c of coins) {

      // If the current amount minus the current coin >= 0,
      if (a - c >= 0) {

        // The current value in the dp array is the minimum of itself and 1 + dp[a-c]
        // 1 is added because it takes 1 more coin than the previous solution
        // dp[a - c] is the index of the current amount minus the current coin
        dp[a] = Math.min(dp[a], 1 + dp[a-c]);
      }
    }
  }

  // If dp[amount] is not equal to the max number we set at the beginning
  if (dp[amount] != amount+1) {

    // Return the value
    return dp[amount];

  // Otherwise there is no solution so return -1
  } else {

    return -1;
  }

};