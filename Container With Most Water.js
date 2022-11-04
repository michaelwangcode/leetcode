//----- QUESTION -----//

// Given an array of heights (that represent the sides of a container),
// return the two heights that give the largest area (volume).



//----- SOLUTION -----//

// Use the two pointer technique (one left, one right) to iterate through the array in one loop
// Calculate and store the area (volume)
// If the left height is larger, move the right pointer back 1
// If the right height is larger or equal, move the left pointer forward 1

// Video: https://www.youtube.com/watch?v=UuiTKBwPgAo



// Input: An array of heights
height = [1, 8, 6, 2, 5, 4, 8, 3, 7];



// This function takes an array of heights and returns the max area (volume)
const maxArea = function(height) {
    
  // Store the left and right indices
  let left = 0;
  let right = height.length-1;
  
  // Store the max volume and current volume
  let maxVolume = 0;
  let currentVolume = 0;
  
  // Loop through the array
  while (left < right) {
      
    // Calculate the current volume: Base * height
    currentVolume = (right-left) * Math.min(height[left], height[right]);

    // Store the max volume
    maxVolume = Math.max(maxVolume, currentVolume);
    
    // If the left height is taller, 
    if (height[left] > height[right]) {

      // Move the right pointer back by 1
      right -= 1;

    // If the right height is taller,
    } else if (height[left] < height[right]) {
        
      // Move the left pointer forward by 1
      left += 1;

    // If the left and right height are equal,
    } else {
        
      // Move the left pointer forward by 1 (or the right backwards, it doesn't matter)
      left += 1;
    }   
  }
  
  // Return the max volume
  return maxVolume;
};



// Test the maxArea function
console.log(maxArea(height));
