# LeetCode

A list of all the LeetCode problems I've completed so far.

Written in JavaScript.


&nbsp;

&nbsp;


## Easy Problems

| #    | Title                                      | Category    | Difficulty | Notes                                       |
|------|--------------------------------------------|-------------|------------|---------------------------------------------|
| 1    | Two Sum                                    | Array       | Easy       | Hash map                                    |
| 9    | Palindrome Number                          | String      | Easy       | Convert string, left & right pointer        |
| 13   | Roman to Integer                           | String      | Easy       | For loop, subtract if smaller               |
| 14   | Longest Common Prefix                      | Array       | Easy       | 2 for loops                                 |
| 20   | Valid Parentheses                          | String      | Easy       | Stack; Hash map for bracket pair            |
| 26   | Remove Duplicates from Sorted Array        | Array       | Easy       | Slow and fast pointer                       |
| 27   | Remove Element                             | Array       | Easy       | Slow and fast pointer                       |
| 35   | Search Insert Position                     | Array       | Easy       | Binary search, return left pointer          |
| 58   | Length of Last Word                        | String      | Easy       | Trim and iterate from back                  |
| 66   | Plus One                                   | Array       | Easy       | Loop through digits back to front           |
| 69   | Sqrt(x)                                    | Number      | Easy       | Loop from 1 to x                            |
| 70   | Climbing Stairs                            | Array       | Easy       | Fibonacci Sequence                          |
| 88   | Merge Sorted Array                         | Array       | Easy       | Loop in reverse, compare                    |
| 94   | Binary Tree Inorder Traversal              | Binary Tree | Easy       | Recursion; or stack                         |
| 100  | Same Tree                                  | Binary Tree | Easy       | Recursion                                   |
| 101  | Symmetric Tree                             | Binary Tree | Easy       | Helper function to check subtrees           |
| 104  | Maximum Depth of a Binary Tree             | Binary Tree | Easy       | Recursion, return 1+Max depth (left, right) |
| 108  | Convert Sorted Array to Binary Search Tree | Binary Tree | Easy       | Recursion, helper function inside function  |
| 118  | Pascal's Triangle                          | Array       | Easy       | For loop                                    |
| 119  | Pascal's Triangle II                       | Array       | Easy       | Loop in reverse, push (1) before adding     |
| 121  | Best Time to Buy and Sell Stock            | Array       | Easy       | Max, slow & fast pointer                    |
| 125  | Valid Palindrome                           | String      | Easy       | Regex; Left and right pointers              |
| 136  | Single Number                              | Array       | Easy       | XOR operator; or hash map                   |
| 141  | Linked List Cycle                          | Linked List | Easy       | Slow and fast pointer                       |
| 144  | Binary Tree Preorder Traversal             | Binary Tree | Easy       | Recursion; or stack                         |
| 145  | Binary Tree Postorder Traversal            | Binary Tree | Easy       | Recursion; or stack                         |
| 167  | Two Sum II - Input Array Is Sorted         | Array       | Easy       | Left and right pointer                      |
| 168  | Excel Sheet Column Title                   | Number      | Easy       | Divide by 26, convert remainder to letter   |
| 169  | Majority Element                           | Array       | Easy       | Track current number and count              |
| 171  | Excel Sheet Column Number                  | String      | Easy       | Base 26 Number                              |
| 190  | Reverse Bits                               | Number      | Easy       | Convert to string                           |
| 191  | Number of 1 Bits                           | Number      | Easy       | Convert to string                           |
| 202  | Happy Number                               | Number      | Easy       | Helper function and hash map                |
| 217  | Contains Duplicate                         | Array       | Easy       | Hash map                                    |
| 219  | Contains Duplicate II                      | Array       | Easy       | Hash map                                    |
| 231  | Power of Two                               | Number      | Easy       | Loop from 0 to 30                           |
| 242  | Valid Anagram                              | String      | Easy       | Hash map                                    |
| 263  | Ugly Number                                | Number      | Easy       | Keep dividing by 2, 3 and 5 until you can't |
| 268  | Missing Number                             | Array       | Easy       | XOR operator; addition & subtraction        |
| 283  | Move Zeroes                                | Array       | Easy       | Slow and fast pointer                       |
| 326  | Power of Three                             | Number      | Easy       | Loop from 0 to 19                           |
| 342  | Power of Four                              | Number      | Easy       | Loop from 0 to 15                           |
| 344  | Reverse String                             | Array       | Easy       | Left and right pointer, swap letters        |
| 350  | Intersection of Two Arrays II              | Array       | Easy       | Sort both arrays; compare elements          |
| 374  | Guess Number Higher or Lower               | Array       | Easy       | Binary search                               |
| 383  | Ransom Note                                | String      | Easy       | Hash map                                    |
| 387  | First Unique Character in a String         | String      | Easy       | Hash map                                    |
| 412  | Fizz Buzz                                  | String      | Easy       | For loop                                    |
| 509  | Fibonacci Number                           | Array       | Easy       | Use array, DP                               |
| 704  | Binary Search                              | Array       | Easy       | Binary search                               |
| 844  | Backspace String Compare                   | String      | Easy       | Stack                                       |
| 876  | Middle of the Linked List                  | Linked List | Easy       | Slow and fast pointer                       |
| 953  | Verifying an Alien Dictionary              | String      | Easy       | indexOf function                            |
| 1047 | Remove All Adjacent Duplicates In String   | String      | Easy       | Stack                                       |
| 1323 | Maximum 69 Number                          | Number      | Easy       | Convert int to string                       |
| 1544 | Make The String Great                      | String      | Easy       | Stack                                       |
| 1704 | Determine if String Halves Are Alike       | String      | Easy       | Left and right pointer                      |


&nbsp;

&nbsp;


## Medium Problems

| #    | Title                                | Category    | Difficulty | Notes                                    |
|------|--------------------------------------|-------------|------------|------------------------------------------|
| 2    | Add Two Numbers                      | Linked List | Medium     | Carry variable, for loop                 |
| 11   | Container With Most Water            | Array       | Medium     | Max, left & right pointer                |
| 15   | 3Sum                                 | Array       | Medium     | Sort, left & right pointer               |
| 36   | Valid Sudoku                         | Array       | Medium     | Hash maps, divide by 3 for square        |
| 53   | Maximum Subarray                     | Array       | Medium     | Kadane's Algorithm, unless all negative  |
| 151  | Reverse Words in a String            | String      | Medium     | Regex and array                          |
| 152  | Maximum Product Subarray             | Array       | Medium     | Track both max and min                   |
| 153  | Find Minimum in Rotated Sorted Array | Array       | Medium     | Binary search                            |
| 198  | House Robber                         | Array       | Medium     | Dynamic Programming, max(n+prev2, prev1) |
| 238  | Product of Array Except Self         | Array       | Medium     | Prefix and postfix array                 |
| 451  | Sort Characters By Frequency         | String      | Medium     | Hash map, convert values to array        |
| 2225 | Find Players With Zero or One Losses | Array       | Medium     | Hash map                                 |
| 2390 | Removing Stars From a String         | String      | Medium     | Stack                                    |


&nbsp;

&nbsp;


## Hard Problems

| # | Title                       | Category | Difficulty | Notes                                           |
|---|-----------------------------|----------|------------|-------------------------------------------------|
| 4 | Median of Two Sorted Arrays | Array    | Hard       | Merge arrays with while loops; calculate median |


&nbsp;

&nbsp;
