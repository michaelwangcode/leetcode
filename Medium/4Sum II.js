// Store all sums of num1 + num2 in hash map
// Calculate all sums of num3 + num4 and see if they pair with anything in the hashmap to make 0


const fourSumCount = function(nums1, nums2, nums3, nums4) {
    
  // Store all sums of num1+num2 in hash map
  let hashMap = {};
  let count = 0;

  // Store all sums combinations of nums1+nums2 in hash map
  for (let a = 0; a < nums1.length; a++) {
    for (let b = 0; b < nums2.length; b++) {
      if (hashMap[nums1[a]+nums2[b]] === undefined) {
        hashMap[nums1[a]+nums2[b]] = 1;
      } else {
        hashMap[nums1[a]+nums2[b]] += 1;
      }
    }
  }

  // Get all sum combinations of num3+num4 and check if they can be added to a number in the hashmap to make 0
  for (let c = 0; c < nums3.length; c++) {
    for (let d = 0; d < nums4.length; d++) {
      if (hashMap[-(nums3[c]+nums4[d])] ) {
        count += hashMap[-(nums3[c]+nums4[d])];
      }
    }
  }

  return count;
};