function countDown(number) {
    for (let counter = number; counter > 0; counter--) {
        console.log(number);
    }

    console.log("Hurray");
}

function countDownRecursive(number) {
    if (number <= 0) {
        console.log("Hurray!");
        return;
    }
    console.log(number);
    countDownRecursive(number -1);
}

// countDownRecursive(3);

function sumRange(number) {
    let total = 0;

    for(let counter = number; counter > 0; counter--) {
        total += counter;
    }

    return total;
}

function sumRangeRecursive(number, total = 0) {
    if ( number <= 0) return total;
    return sumRangeRecursive(number - 1, total += number);
}

// console.log(sumRange(3) == sumRangeRecursive(3));

function printChildren(number) {

}

const childrenTree = {
    name: "John",
    children: [
        {
            name: "Jim",
            children: [],
        },
        {
            name: "Zoe",
            children: [
                { name: "Kyle", children: []},
                { name: "Sophia", children: []},
            ]
        }
    ]
}

function printChildrenRecursive(tree) {
    if (tree.children.length === 0) return;

    tree.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);
    })
}

printChildrenRecursive(childrenTree);