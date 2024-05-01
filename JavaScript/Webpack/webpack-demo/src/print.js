// function printMe() {
//     console.log(`I get called from print.js`);
//     console.log(typeof printMe === 'function');
// }

// export { printMe as default };

console.log("This print.js module has been loaded! See the network tab in dev tools...");

export default () => {
    console.log("Button clicked: Here's 'Some text!'");
}