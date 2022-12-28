//----- QUESTION -----//





//----- SOLUTION -----//




// Input: An array of strings
const strs = ["eat","tea","tan","ate","nat","bat"];




// This function takes an array of strings and groups the anagrams together
const groupAnagrams = function(strs) {
    
  // Create a hashmap to hold the strings
  let hashMap = {};

  // Iterate through the array of strings
  for (let string of strs) {

    // If the sorted string is already in the hash map,
    if (hashMap[sortString(string)] !== undefined) {
      
      // Add the string to the hash map by pushing it to its array
      hashMap[sortString(string)].push(string);

    // If the sorted string is not in the hash map,
    } else {

      // Add it to the hash map with an array as a value, and the original string in the array
      hashMap[sortString(string)] = [string];
    }
  }

  // Create an array to store the result
  let result = [];

  // Iterate through the hashMap
  for (let anagrams in hashMap) {

    // Push the subarrays to the result array
    result.push(hashMap[anagrams]);
  }

  // Return the result array
  return result;
};



// Helper function: This function takes a string and returns it sorted in alphabetical order
function sortString(string) {

  // Convert string in to array so it can be sorted
  let array = string.split("");

  // Sort the array in alphabetical order
  array.sort();

  // Convert the sorted array back into a string
  let sorted = array.join(""); 

  // Return the sorted string
  return sorted;
}



// Test the sortString function
console.log(sortString("hello"));

// Test the groupAnagrams function
console.log(groupAnagrams(strs));

