/*if (hour < 18){
    greeting = "Good day.";
} else{
    greeting = "Good evening.";
}*/

time = 8;

let greeting = "";

if (time < 10) {
    greeting = "Good Morning.";
} else if (time < 20) {
    greeting = "Good day.";
} else {
    greeting = "Good evening";
}

console.log(greeting)

if (1 || 0) { // works just like if( true || false )
    console.log( 'truthy!' );
  }

let hour = 9;

if (hour < 10 || hour > 18) {
    console.log("Oops! Office closed.")
}

// Passing in more conditions.
let hourOne = 12;
let isWeekend = true;

if (hourOne < 10 || hourOne > 18 || isWeekend) {
    console.log("Sorry! The Office is closed.")
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

true || alert("not printed");
false || alert("printed");

// result = a && b;
/*
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
*/

let hourTwo = 12;
let minute = 30;

if (hourTwo == 12 && minute == 30){
    alert("The time is 12:30")
}
  
// Task Variant 1

if (!(age >= 14 && age <=90))

// Variant Two.
if (age <14 || age > 90){

}