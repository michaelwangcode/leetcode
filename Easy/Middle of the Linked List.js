//----- QUESTION -----//

// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.



//----- SOLUTION -----//

// Use a slow and fast pointer
// Move the slow pointer forwards by 1 and the fast pointer forwards by 2
// When the fast pointer reaches the end, the slow pointer will be at the middle node



// This function returns the middle node in a linked list
const middleNode = function(head) {
    
  // Set the slow and fast node to head
  let slow = head;
  let fast = head;
  
  // While the fast node and fast.next is not null,
  while (fast !== null && fast.next !== null) {

    // Move the slow node forward by 1
    slow = slow.next;

    // Move the fast node forward by 2
    fast = fast.next.next;
  }
  
  // Return the slow node
  return slow;
};
