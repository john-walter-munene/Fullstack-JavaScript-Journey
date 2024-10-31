var levelOrder = function(root) {
    let output = [];
    let queue = [];
    let currentNode = root;
    queue.push(currentNode);
    let currentLevel = 1;
    while(queue.length){
        
        currentNode = queue.shift();
        currentLevel--; //this will ensure we are adding new lines only on next level
        output.push(currentNode);
        
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        
        if(currentLevel = 0){
            output = output + '/n'; //Insert a new line
            currentLevel = queue.length; //2
        }
    }
    return output;
    };