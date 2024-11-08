// JavaScript program to convert sorted 
// array to BST.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Recursive function to construct BST
function sortedArrayToBSTRecur(arr, start, end) {
    if (start > end) return null;

    // Find the middle element
    let mid = start + Math.floor((end - start) / 2);

    // Create root node
    let root = new Node(arr[mid]);

    // Create left subtree
    root.left = sortedArrayToBSTRecur(arr, start, mid - 1);

    // Create right subtree
    root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

    return root;
}

function sortedArrayToBST(arr) {
    return sortedArrayToBSTRecur(arr, 0, arr.length - 1);
}

// A utility function to insert a new
// node with the given key
function insert(root, key) {

    if (root === null)
        return new Node(key);
        
    // Duplicates not allowed    
    if (root.key === key)
        return root;
        
    if (key < root.key)
        root.left = insert(root.left, key);
    else if (key > root.key)
        root.right = insert(root.right, key);

    return root;
}

function preOrder(root) {
    if (root === null) return;
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}

const arr = [1, 2, 3, 4];
const root = sortedArrayToBST(arr);
preOrder(root);

function findDepth(root, x)
{
    
    // Base case
    if (root == null)
        return -1;

    // Initialize distance as -1
    var dist = -1;

    // Check if x is current node=
    if ((root.data == x)|| 
    
        // Otherwise, check if x is
        // present in the left subtree
        (dist = findDepth(root.left, x)) >= 0 || 
        
        // Otherwise, check if x is
        // present in the right subtree
        (dist = findDepth(root.right, x)) >= 0)

        // Return depth of the node
        return dist + 1;
        
    return dist;
}