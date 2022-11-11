//----- QUESTION -----//

// Given two strings, return true if they are anagrams of each other.



//----- SOLUTION -----//

// Use hash maps to track the occurrences of each letter
// Then, iterate through the hash maps and see if the values are identical



// Input: Two strings, s and t
const s = "anagram";
const t = "nagaram";



// This function determines if a string is an anagram
const isAnagram = function(s, t) {
  
  // If strings are not the same length, return false
  if (s.length !== t.length) {
    return false;
  }
  
  // Create a hash map for each string
  let hashMap1 = {};
  let hashMap2 = {};
  
  // String s: Add occurrences of each letter to the hash map
  for (let i = 0; i < s.length; i++) {
    if (hashMap1[s[i]] === undefined) {
      hashMap1[s[i]] = 1;
    } else {
      hashMap1[s[i]] += 1
    }
  }
  
  // String t: Add occurrences of each letter to the hash map
  for (let i = 0; i < t.length; i++) {
    if (hashMap2[t[i]] === undefined) {
      hashMap2[t[i]] = 1;
    } else {
      hashMap2[t[i]] += 1
    }
  }

  // Compare both hash maps key by key and return false if they are different 
  for (const key in hashMap1) {
    if (hashMap1[key] !== hashMap2[key]) {
        return false;
    }
  }
  
  // Otherwise return true
  return true;
};



// Test the isAnagram function
console.log(isAnagram(s, t));



// Less efficient anagram function
const isAnagram2 = function(s, t) {
    
  // Convert both strings to an array, sort them, then convert them back to a string
  let word1 = String(s.split("").sort());
  let word2 = String(t.split("").sort());
  
  // Return true if both words are equal
  return word1 === word2;
};