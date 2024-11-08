// JavaScript program to convert a sorted array to a balanced binary search tree (BST).

class Node {
    constructor(value) {
        this.value = value; // Changed 'data' to 'value' for clarity
        this.left = null;   // Left child
        this.right = null;  // Right child
    }
}

function sortedArrayToBST(sortedArray) {
    const arrayLength = sortedArray.length; // Length of the array

    if (arrayLength === 0) {
        return null; // Return null for empty array
    }

    // Create the root node
    const midIndex = Math.floor((arrayLength - 1) / 2); // Find the middle index
    const rootNode = new Node(sortedArray[midIndex]); // Create the root node with middle value

    // Queue to hold nodes along with their range in the array
    const nodeQueue = [{ node: rootNode, range: [0, arrayLength - 1] }];
    let currentIndex = 0; // Index for tracking the front of the queue

    // Loop until all nodes are processed
    while (currentIndex < nodeQueue.length) {
        const frontNodeData = nodeQueue[currentIndex]; // Get the front node and its range
        const currentNode = frontNodeData.node; // Current node being processed
        const [startIndex, endIndex] = frontNodeData.range; // Start and end indices of the range
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2); // Calculate the middle index

        // If the left subtree exists
        if (startIndex < middleIndex) {
            const leftMidIndex = startIndex + Math.floor(((middleIndex - 1) - startIndex) / 2); // Left middle index
            const leftChildNode = new Node(sortedArray[leftMidIndex]); // Create left child node
            currentNode.left = leftChildNode; // Attach left child to the current node
            nodeQueue.push({ node: leftChildNode, range: [startIndex, middleIndex - 1] }); // Add left child to the queue
        }

        // If the right subtree exists
        if (endIndex > middleIndex) {
            const rightMidIndex = middleIndex + 1 + Math.floor((endIndex - (middleIndex - 1)) / 2); // Right middle index
            const rightChildNode = new Node(sortedArray[rightMidIndex]); // Create right child node
            currentNode.right = rightChildNode; // Attach right child to the current node
            nodeQueue.push({ node: rightChildNode, range: [middleIndex + 1, endIndex] }); // Add right child to the queue
        }

        currentIndex++; // Move to the next node in the queue
    }

    return rootNode; // Return the root node of the BST
}

// Function to insert a new node with the given key
function insert(root, x)
{
    const temp = new Node(x);

    // If tree is empty
    if (root === null)
        return temp;

    // Find the node who is going to have
    // the new node temp as its child
    let parent = null;
    let curr = root;
    while (curr !== null) {
        parent = curr;
        if (curr.key > x)
            curr = curr.left;
        else if (curr.key < x)
            curr = curr.right;
        else
            return root; // Key already exists
    }

    // If x is smaller, make it left
    // child, else right child
    if (parent.key > x)
        parent.left = temp;
    else
        parent.right = temp;

    return root;
}

// Pre-order traversal function to print the tree
function preOrder(node) {
    if (node === null) {
        return; // Base case for recursion
    }
    console.log(node.value + " "); // Print the node's value
    preOrder(node.left); // Traverse left subtree
    preOrder(node.right); // Traverse right subtree
}

const sortedArray = [1, 2, 3, 4]; // Example sorted array
const rootNode = sortedArrayToBST(sortedArray); // Build the BST
preOrder(rootNode); // Print the BST in pre-order