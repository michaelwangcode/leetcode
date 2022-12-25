//----- QUESTION -----//




//----- SOLUTION -----//






// Brute force solution: Sort the array and iterate to find longest subsequence
// Keep track of the longest subsequence both currently and globally
// If the next number is a duplicate, do nothing and advance



// Brute force O(nlogn)
const longestConsecutive = function(nums) {
    
  if (nums.length === 0) {
    return 0;
  }

  sorted = nums.sort((a,b) => a - b);


  let longest = 1;
  let currentLongest = 1;


  for (let i = 0; i < sorted.length; i++) {

    if (sorted[i] + 1 === sorted[i+1]) {
      currentLongest += 1;

      longest = Math.max(currentLongest, longest)

    } else if (sorted[i] === sorted[i+1]){
      

    } else {
      currentLongest = 1;
    }

  }


  return longest;

};