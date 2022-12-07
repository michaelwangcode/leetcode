//----- QUESTION -----//

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// Example: 
// List 1: 2 -> 4 -> 3
// List 2: 5 -> 6 -> 4
// Result: 8 -> 0 -> 7



//----- SOLUTION -----//

// Use a loop to iterate through both lists and add each number together, then append the sum to a results list
// The loop will terminate once both nodes are null and there is no carry value

// The loop has three sections:
// 1. Store value of node 1 and node 2 (set value to 0 if node is null)
// 2. Add the two node values and append a node to the result (set the carry value)
// 3. Advance the nodes forward (if the nodes are not null)

// Note: Use the ternary operator to save space



// This function returns the sum of two linked lists
const addTwoNumbers = function(l1, l2) {

  // Create a new linked list to hold the resulting number
  // The first node is a dummy node and is not returned in the result
  let result = new ListNode();

  // Create a pointer for the result
  let current = result;

  // Stores the digit to carry
  carry = 0;


  // Iterate through both lists as along as both nodes are not null
  // Or there is a carry digit
  while (l1 !== null || l2 !== null || carry !== 0) {

    //----- Store the values for the current two nodes -----//
    // If a node is null, give it the value 0
    let value1 = l1 ? l1.val : 0;
    let value2 = l2 ? l2.val : 0;
    

    //----- Calculate new node value -----//
    let sum = value1 + value2 + carry;
    
    // If the sum of l1 and l2 is over 10, add a carry
    // Otherwise, set the carry to 0
    carry = sum >= 10 ? 1 : 0;
    
    // Save the last digit of the sum
    sum = sum % 10;
    
    // Create new node and add it to results
    current.next = new ListNode(sum);
    

    //---- Advance the current, l1 and l2 nodes -----//
    current = current.next;

    // If a node is not null, set it to the next node
    // Otherwise, set the node to null
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  
  // Return the result list (without the dummy first node)
  return result.next;
};

