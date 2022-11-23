//----- QUESTION -----//

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.



//----- SOLUTION -----//

// Start from the end of the nums1 array, and start copying over the largest values
// Compare the last values from the 
// At the end, add the leftover nums2 elements to the nums1 array

// Video: https://www.youtube.com/watch?v=P1Ic85RarKY



// Input: Two arrays of intergers and index numbers
let nums1 = [1,2,3,0,0,0]; 
let m = 3;
let nums2 = [2,5,6];
let n = 3;



// This function merges two sorted arrays and stores it in the first array
const merge = function(nums1, m, nums2, n) {
    
  // Get the index of the last element in nums1
  let last = m + n - 1

  // Decrement the m and n index pointers (so they correspond to the last elements)
  m--;
  n--;
  
  // Iterate through the arrays from back to front
  while (m >= 0 && n >= 0) {
      
    // If the nums1 element is larger than the nums2 element,
    if (nums1[m] > nums2[n]) {
      
      // Store the nums1 element at the end of the array
      nums1[last] = nums1[m];

      // Decrease the m index
      m--;

    // If the nums1 element is smaller or equal to the nums2 element,
    } else {

      // Store the nums2 element at the end of the array
      nums1[last] = nums2[n];

      // Decrease the n index
      n--;
    }
    
    // Decrease the last index
    last--;
  }
  

  // Fill nums1 with leftover nums2 elements
  while (n >= 0) {

    // Fill nums1 at the last index with nums2
    nums1[last] = nums2[n]

    // Decrement the n and last index pointers
    n--;
    last--;
  }
};



// Test the merge function
console.log(merge(nums1, m, nums2, n));
console.log(nums1);
