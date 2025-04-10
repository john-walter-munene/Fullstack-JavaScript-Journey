console.log("Now coding");

class LinkedList {
    constructor() {
        this.value = null;
    }

    head() {
        return this.value;
    }

    append(value) {
        // If list is empty initialize head node with value.
        if (this.value === null) {
            this.value = new Node(value);
        }
        // Traverse through list and append item to last node.
        else {
            let temp = this.value;
            while (temp.nextNode !== null) temp = temp.nextNode;
            temp.nextNode = new Node(value);
        }
    }

    prepend(value) {
        // If list is empty initialize head node with value.
        if (this.value === null) {
            this.value = new Node(value);
        } else {
            // Long method.
            // let newNode = new Node(value);
            // newNode.nextNode = this.value;
            // this.value = newNode;

            // Consise method.
            let newNode = new Node(value, this.value);
            this.value = newNode;
        }
    }

    size() {
        let temp = this.value;
        let counter = 0;

        while(temp !== null) {
            temp = temp.nextNode;
            counter++;
        } 

        return counter;
    }

    tail() {
        let temp = this.value;
        while (temp.nextNode) temp = temp.nextNode;

        return temp;
    }

    atIndex(index) {
        let temp = this.value;
        let counter = 0;

        while (temp.nextNode !== null) {
            temp = temp.nextNode;
            counter++;
            if (counter === index) return temp;
        }
    }

    pop() {
        // If list is empty, terminate and return undefined.
        if (this.value === null) {
            console.log("List is empty, nothing to pop");
            return;
        }

        // If there's only one node in the list
        if (this.value.nextNode === null) {
            this.value = null;
            return;
        }

        // Long method.
        // First pass: Find the total number of nodes (i.e., the index of the last node)
        // let temp = this.value;
        // let counter = 0;
        // while (temp.nextNode) {
        //     temp = temp.nextNode;
        //     counter++;
        // }

        // // Second pass: Traverse again to the second-last node
        // let secondLastIndex = counter - 2;
        // let currentIndex = 0;
        // temp = this.value // Reset temp to back to head.

        // while (currentIndex < secondLastIndex) {
        //     temp = temp.nextNode;
        //     delCounter++;
        // }

        // temp.nextNode = null;

        // Concise method.
        // Traverse the list to find the second-last node.
        let temp = this.value;
        while (temp.nextNode.nextNode !== null) {
            temp = temp.nextNode;
        }

        // Set the second-last node's nextNode to null, effectively removing the last node
        temp.nextNode = null;
    }

    contains(value) {
        let temp = this.value;

        while(temp != null) {
            if (temp.value === value) return true;
            temp = temp.nextNode;
        }

        return false;
    }

    find(value) {
        let temp = this.value;
        let counter = 0;

        while (temp != null) {
            if (temp.value == value) return counter;
            temp = temp.nextNode;
            counter++;
        }

        return -1;
    }

    toString() {
        let temp = this.value;
        let string = '';

        while (temp != null) {
            string += `( ${temp.value} ) -> `;
            temp = temp.nextNode;
        }

        return string += `null`;
    }

    insertAt(value, index) {
        if (index < 0) return;  // Invalid index, return early.
    
        let temp = this.value;
        let counter = 0;
    
        // If inserting at the head (index 0)
        if (index === 0) {
            this.prepend(value);  // Reuse the prepend method to handle insertion at the head
            return;
        }
    
        // Traverse the list to find the correct position
        while (temp != null) {
            if (counter === index - 1) {  // We stop at the node just before the insertion point
                let newNode = new Node(value);  // Create a new node with the given value
                let currentNodeToEnd = temp.nextNode;  // Save reference to the next node
                newNode.nextNode = currentNodeToEnd;  // Point new node to the next node
                temp.nextNode = newNode;  // Point current node to the new node
                return;
            }
            temp = temp.nextNode;  // Move to the next node in the list
            counter++;
        }
    }

    removeAt(index) {
        if (index < 0 || this.value === null) return;
    
        // If removing the head (index 0)
        if (index === 0) {
            this.value = this.value.nextNode;
            return;  // Exit after removing the head
        }
    
        let temp = this.value;
        let counter = 0;
    
        // Traverse the list to find the node before the one to be removed
        while (temp != null) {
            if (counter === index - 1 && temp.nextNode != null) {
                // Remove the node by updating the pointer
                temp.nextNode = temp.nextNode.nextNode;
                return;
            }
            temp = temp.nextNode;
            counter++;
        }
    }    

    copy() {
        // If the list is empty, return a new empty list
        if (this.value === null) return new LinkedList();

        const copiedList = new LinkedList();
        let current = this.value;  // Start from the head of the original list
        while (current !== null) {
            copiedList.append(current.value);  // Append the value to the copied list
            current = current.nextNode;  // Move to the next node
        }
        return copiedList;
    }
    
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Copy the linked list using the new copy method
const copiedLinkedList = list.copy();

console.log("Original Linked List: " + list.toString());
console.log("Copied Linked List: " + copiedLinkedList.toString());