let myJSONString = '{"name":"John", "age":30, "city":"New York"}';

const myObject = JSON.parse(myJSONString);
myObject["creator"] = "John Walter";

console.log(myObject);

// Exceptions.
// Dates are not allowed in JSON.
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const textObject = JSON.parse(text);

textObject.birth = new Date(textObject.birth);
console.log(textObject);

// Convert a string into a date using the reviver function.
const newTextObject = JSON.parse(text, function(key, value) {
    if (key === "birth") {
        return new Date(value);
    } else return value;
});

console.log(newTextObject.birth);
console.log("\n");

// Parsing functions.
const textWithFunction = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const objectWithFunction = JSON.parse(textWithFunction);
objectWithFunction.age = eval("(" + objectWithFunction.age + ")");
console.log(`${objectWithFunction.name}, ${objectWithFunction.age()}`); // Outputs: John, 30

const newObjectWithFunction = JSON.parse(textWithFunction);
newObjectWithFunction.age = eval(`(${newObjectWithFunction.age})`);
console.log(`${newObjectWithFunction.name}, ${newObjectWithFunction.age()}`); // Outputs: John, 30

// Avoid using functions as they loose their scope and will always need eval to be converted back to funcs.