//----- QUESTION -----//

// Given the head of a linked list, determine if the linked list has a cycle in it.



//----- SOLUTION -----//

// Use a slow and fast pointer to iterate until fast is null
// If the slow and fast pointer ever point to the same node, there is a cycle
// Otherwise, there is no cycle



// This function returns true if a linked list has a cycle
const hasCycle = function(head) {
    
  // Create a slow and fast pointer
  let slow = head;
  let fast = head;
  
  // While fast and fast.next is not null,
  while (fast !== null && fast.next !== null) {
      
    // Move the slow node forward by 1
    slow = slow.next;

    // Move the fast node forward by 2 
    fast = fast.next.next;
      
    // If the slow node and fast node point to the same node,
    if (slow === fast) {

      // There is a cycle so return true
      return true;
    }
  }
  
  // Otherwise, there is no loop so return false
  return false;
};

