// Recursive javascript program for level
// order traversal of Binary Tree

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

// Function to print level order traversal of tree
function printLevelOrder(root) {
    var h = height(root);
    var i;
    for (i = 1; i <= h; i++)
        printCurrentLevel(root, i);
}

// Print nodes at the current level
function printCurrentLevel(root, level) {
    if (root == null)
        return;
    if (level == 1)
        console.log(root.data + " ");
    else if (level > 1) {
        printCurrentLevel(root.left, level - 1);
        printCurrentLevel(root.right, level - 1);
    }
}

// Compute the "height" of a tree
function height(root) {
    if (root == null)
        return 0;
    else {
        var lheight = height(root.left);
        var rheight = height(root.right);
        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
printLevelOrder(root);