//----- QUESTION -----//

// Given two integer arrays nums1 and nums2, return an array of their intersection (all common elements). 
// Each element in the result must appear as many times as it shows in both arrays 
// and you may return the result in any order.



//----- SOLUTION -----//

// Sort both arrays in ascending order.
// Loop through the array and compare the elements one by one.
// If the elements are equal, add the element to the common elements array.
// Otherwise, advance the appropriate pointer forwards.



// Input: Two arrays of integers
let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];



// This function returns the intersection (common elements) between two arrays of integers
const intersect = function(nums1, nums2) {

  // Sort the two arrays in ascending order
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  // Create a pointer for each array (i for nums1, j for nums2)
  let i = 0;
  let j = 0;

  // Store the common elements in this array
  let result = [];
  
  // Iterate through both of the arrays
  while(i < nums1.length && j < nums2.length) {
      
    // If the numbers at both indices are the same,
    if (nums1[i] === nums2[j]) {

      // Push the number to the common elements array
      result.push(nums1[i]);

      // Increment both indices by 1
      i++;
      j++;

    // If the first number is smaller than the second number,
    } else if (nums1[i] < nums2[j]) {

      // Increment the first pointer
      i++;

    // If the first number is larger than the second number,
    } else if (nums1[i] > nums2[j]) {

      // Increment the second pointer
      j++;
    } 
  }

  // Return the array of duplicates
  return result;
};



// Call the intersect function
console.log(intersect(nums1, nums2));
