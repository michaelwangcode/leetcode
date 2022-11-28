//----- QUESTION -----//

// Given two sorted arrays nums1 and nums2 of size m and n respectively, 
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



//----- SOLUTION -----//

// Create a result array to hold the sorted array
// Store the index of nums1, nums2 and result
// Merge the two arrays into the result array using 3 while loops
// Calculate the median of the result array

// https://javaconceptoftheday.com/merge-two-sorted-arrays-in-java/



// Input: Two sorted arrays of integers
let a = [0,2,4,6,8,10];
let b = [1,3,5,7,9];



// This function returns the median of two sorted arrays
const findMedianSortedArrays = function(nums1, nums2) {
    
  //----- Merge the two arrays -----//

  // Create a result array that's the size of both arrays combined
  let result = new Array(nums1.length + nums2.length);

  // Track the index for each array
  let index1 = 0;
  let index2 = 0;
  let indexr = 0;

  // Iterate through 
  while (index1 < nums1.length && index2 < nums2.length) {

    // If the current value of nums1 is smaller or equal to the current value of nums2,
    if (nums1[index1] < nums2[index2]) {

      // Add the value at index1 to the result array
      result[indexr] = nums1[index1];

      // Increment the indices of nums1 and result
      index1++;
      indexr++;

    // Otherwise, if the current value of nums2 is smaller than the current value of nums1,
    } else {

      // Add the value at index2 to the result array
      result[indexr] = nums2[index2];

      // Increment the indices of nums2 and result
      index2++;
      indexr++;
    }
  }

  // If there are elements remaining in nums1, add it to the result array
  while (index1 < nums1.length) {
    
    // Add the value at index1 to the result array
    result[indexr] = nums1[index1];

    // Increment the indices of nums1 and result
    index1++;
    indexr++;
  }

  // If there are elements remaining in nums2, add it to the result array
  while (index2 < nums2.length) {

    // Add the value at index2 to the result array
    result[indexr] = nums2[index2];

    // Increment the indices of nums2 and result
    index2++;
    indexr++;
  }

  //----- Calculate median -----//

  // If the result array is 0, return null
  if (result.length === 0) {
    return null;

  // If the result array is odd in length,
  } else if (result.length % 2 === 1 ) {

    // Return the middle element
    return result[Math.floor(result.length/2)]

  // If the array is even in length,
  }  else if (result.length % 2 === 0) {

    // Return the average of the middle 2 elements
    return (result[result.length/2 - 1] + result[result.length/2])/2;
  }
};



// Test the findMedianSortedArrays function
console.log(findMedianSortedArrays(a,b));
