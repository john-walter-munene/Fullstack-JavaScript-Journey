// Binary search trees.
class Node {
    constructor(element) {
        this.element = element;
        this.right = null;
        this.left = null;
    }
}

// Binary search.
function search(element, tree) {
    if (tree === null)  {
        return false;
    } else if (element === tree.element) {
        return true;
    } else if (element < tree.element) {
        return search(element, tree.left);
    } else {
        return search(element, tree.right);
    }
}

// Binary search on arrays.
function binarySearchOnArrays(data, array, begin = 0, end = array.length) {
    if (end < begin) return false;

    let midPoint = Math.floor(begin + (end - begin) / 2);
    let middleElement = array[midPoint];

    if (data === middleElement) {
        return true;
    } else if (data < middleElement) {
        return binarySearchOnArrays(data, array, begin, midPoint);
    } else {
        return binarySearchOnArrays(data, array);
    }
}