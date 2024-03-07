/* let a, b, rest;

[a, b] = [10, 20];

console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // 30, 40, 50
*/
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
console.log(numbers);

// Rest property.
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]

// Array destructuring.
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// Unpacking values from a regular expression match.
function parseProtocol(url) {
    const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
      return false;
    }
    console.log(parsedURL);
    // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]
  
    const [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
  }
  
  console.log(
    parseProtocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
  );
  // "https"
  
// Object destructuring.
const user = {
    id: 42,
    isVerified: true,
  };
  
const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true

const userTwo = {
    id: 42,
    displayName: "jdoe",
    fullName: {
      firstName: "Jane",
      lastName: "Doe",
    },
  };

function userId({ id }) {
    return id;
}

console.log(userId(userTwo));

// Nested Object and array destructuring.
const metadata = {
    title: "Scratchpad",
    translations: [
      {
        locale: "de",
        localizationTags: [],
        lastEdit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung",
      },
    ],
    url: "/en-US/docs/Tools/Scratchpad",
  };
  
  const {
    title: englishTitle, // rename
    translations: [
      {
        title: localeTitle, // rename
      },
    ],
  } = metadata;
  
  console.log(englishTitle); // "Scratchpad"
  console.log(localeTitle); // "JavaScript-Umgebung"
  
// Iteration and destructuring.
const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    },
  ];
  
  for (const {
    name: n,
    family: { father: f },
  } of people) {
    console.log(`Name: ${n}, Father: ${f}`);
  }
  
  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones"
  