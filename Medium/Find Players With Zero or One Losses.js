//----- QUESTION -----//

// You are given an integer array matches where matches[i] = [winner, loser] 
// indicates that the player winner defeated player loser in a match.

// Return a list answer of size 2 where:
// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.



//----- SOLUTION -----//

// Use two hash maps, one for wins and the number of games a player has won
// The other is for losses, and the number of games a player has lost



// Input: An array of matches
const matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];



// This function returns all players with zero losses and one less
const findWinners = function(matches) {
    
  // Create hash maps for the wins and losses
  const wins = {};
  const losses = {};
  
  // Iterate through matches to record all wins and losses
  for (let match of matches) {
      
    // Add win to wins hash map
    if (wins[match[0]] === undefined) {
      wins[match[0]] = 1;
    } else {
      wins[match[0]] += 1;
    }
    
    // Add loss to losses hash map
    if (losses[match[1]] === undefined) {
      losses[match[1]] = 1;
    } else {
      losses[match[1]] += 1;
    }
  }
  
  // This array stores players with zero losses
  let noLosses = [];
  
  // Add players with zero losses to array
  for (let winner in wins) {
    if (losses[winner] === undefined) {
      noLosses.push(winner);
    }
  }
  
  // This array stores players with one loss
  let oneLoss = []
  
  // Add players with one loss to array
  for (let loser in losses) {
    if (losses[loser] === 1) {
      oneLoss.push(loser);
    }
  }
  
  // Return the two arrays in a larger array
  return[noLosses, oneLoss]
};



// Test the findWinners function
console.log(findWinners(matches));
