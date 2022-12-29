let nums = [4,1,-1,2,-1,2,3];
let k = 2;


const topKFrequent = function(nums, k) {

  // Create hash map of frequencies
  let hashMap = {};

  for (let num of nums) {
    if (hashMap[num] === undefined) {
      hashMap[num] = 1;
    } else {
      hashMap[num] += 1;
    }
  }



  // Create array of frequencies, with the frequency as the index
  let array = [];

  // Set a blank array as each value
  for (let i = 0; i < nums.length; i++) {
    array[i] = [];
  }


  
  // Iterate through the values in the nums array
  for (let i = 0; i < nums.length; i++) {

    // Store the number of times the number occurs in the nums array
    let frequency = hashMap[nums[i]] -1;


    // If the array does not contain the number yet,
    if (array[frequency].includes(nums[i]) === false) {
    
      // Push the number at the corresponding frequency value
      array[frequency].push(nums[i]);
    }
  }
  


  array = array.flat()
  
  let result = [];

  // Iterate through the array from largest to smallest (back to front)
  for (let i = nums.length-1; i >= 0; i--) {

    if (array[i] !== undefined) {
      result.push(array[i]);
      k--;
    }



    if (k === 0) {
      break;
    }
    

  }


  return result;



  
};






console.log(topKFrequent(nums, k));


