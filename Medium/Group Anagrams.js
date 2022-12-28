//----- QUESTION -----//

// Given an array of stirngs, group the anagrams together in an array and return them.

// For example:
// Input:  ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]



//----- SOLUTION -----//

// Use a hash map to keep track of the anagrams.
// The key is a string sorted in alphabetical order; the value is an array of strings that are an anagram of that key
// Example: { "act": ["act", "cat"] }

// Create a helper function that takes a string and returns the letters sorted in alphabetical order.

// 1. Loop through the array of strings
// 2. If the sorted string exists in the hash map, add the current word to its array
//    If it is not in the hash map, add it using the sorted string as the key and an array containing the original string
// 3. Iterate through the hash map and add the anagram arrays to a result array
// 4. Return the result array



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

