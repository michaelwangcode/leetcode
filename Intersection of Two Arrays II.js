const intersect = function(nums1, nums2) {

  nums1.sort(function (a, b) {  return a - b;  })
  nums2.sort(function (a, b) {  return a - b;  })

  let i = 0;
  let j = 0;
  let result = [];
  
  while(i < nums1.length && j < nums2.length) {
      
      if (nums1[i] === nums2[j]) {
          result.push(nums1[i]);
          i++;
          j++;
      }
      else if (nums1[i] < nums2[j]) {
          i++;
      }
      else if (nums1[i] > nums2[j]) {
          j++;
      }
      
  }

  return result;
};