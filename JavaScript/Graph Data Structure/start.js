// Time and space complexity O(E)
let edgeList = [ [0,1], [0,6], [0,8], [1,4], [1,6], [1,9], [2,4], [2,6], [3,4], [3,5],
[3,8], [4,5], [4,9], [7,8], [7,9] ];

// Time and space complexity O(1), O(V^2)
let adjacencyMatrix = [ [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
                        [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
                        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
                        [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0] ];

// Time and space complexity: O(V), O(V + E)
let adjacencyList = [ [1, 6, 8],
                      [0, 4, 6, 9],
                      [4, 6],
                      [4, 5, 8],
                      [1, 2, 3, 5, 9],
                      [3, 4],
                      [0, 1, 2],
                      [8, 9],
                      [0, 3, 7],
                      [1, 4, 7] ];

// Iteration through an adjacency list.
for (let j = 0; j < adjacencyList[i].length; j++) {
    doStuff(adjacencyList[i][j]);
}

var vertex = graph[i];
for (var j = 0; j < vertex.length; j++) {
    doStuff(vertex[j]);
}

var edgeListNew =  [ [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5] ];;

var adjMatrixNew = [
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    ];

var adjListNew = [
    [2],
    [3],
    [3, 4],
    [5],
    [5],
    [],
    ];

const adjacencyMatrixDirected = [
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0],
]