// A O(n) Javascript program to construct cartesian tree
// from a given array

// A binary tree node has data, pointer to leftchild and a pointer to right child

class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

// Function to test buildTree().
function printInOrder(node) {
    if (node == null) return;

    printInOrder(node.left);
    console.log(node.data + " ");
    printInOrder(node.right);
}

// Recursively construct subtree under given root using
// leftchild[] and rightchild
function buildCartesianTreeUtil(root, arr, parent, leftchild, rightchild) {
    if (root == -1) return null;

    // Create a new node with roots data.
    let temp = new Node();
    temp.data = arr[root];

    // Recursively construct left and right subtees.
    temp.left = buildCartesianTreeUtil(leftchild[root], arr, parent, leftchild, rightchild);
    temp.right = buildCartesianTreeUtil(rightchild[root], arr, parent, leftchild, rightchild);

    return temp;
}

// A function to create the Cartesian Tree in O(N) time
function buildCartesianTree(arr, n) {
    let parent = new Array(n);
    let leftchild = new Array(n);
    let rightchild = new Array(n);

    // Initialize all array values as -1
    memset(parent, -1);
    memset(leftchild, -1);
    memset(rightchild, -1);

    // 'root' and 'last' stores the index of the root and the
    // last processed of the Cartesian Tree.
    // Initially we take root of the Cartesian Tree as the
    // first element of the input array. This can change
    // according to the algorithm
    let root = 0, last;

    // Starting from the second element of the input array
    // to the last on scan across the elements, adding them
    // one at a time.
    for (let i = 1; i <= n - 1; i++) {
        last = i - 1;
        rightchild[i] = -1;
    
        // Scan upward from the node's parent up to
        // the root of the tree until a node is found
        // whose value is greater than the current one
        // This is the same as Step 2 mentioned in the
        // algorithm
        while (arr[last] <= arr[i] && last != root) last = parent[last];
       
        // arr[i] is the largest element yet; 
        // make it new root
        if (arr[last] <= arr[i]) {
            parent[root] = i;
            leftchild[i] = root;
            root = i;
        }
       
        // Just insert it
        else if (rightchild[last] == -1) {
            rightchild[last] = i;
            parent[i] = last;
            leftchild[i] = -1;
        }
         
        // Reconfigure links
        else {
            parent[rightchild[last]] = i;
            leftchild[i] = rightchild[last];
            rightchild[last] = i;
            parent[i] = last;
        }
    }
       
    // Since the root of the Cartesian Tree has no
    // parent, so we assign it -1
    parent[root] = -1;
       
    return (buildCartesianTreeUtil (root, arr, parent, leftchild, rightchild));
}

function memset(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = value;
    }
}

/* Driver code */
/* Assume that inorder traversal of following tree
    is given
        40
        / \
     10     30
    /         \
  5             28 */

let arr = [5, 10, 40, 30, 28];
let n = arr.length;

let root = buildCartesianTree(arr, n);

// Let us test the built tree by printing Inorder traversal 
console.log(`In order traversal of the constructed tree : ${printInOrder(root)}`);