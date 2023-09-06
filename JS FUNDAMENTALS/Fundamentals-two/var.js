// Var has no scope.

if (true) {
    var test = true;
}

alert(test)
// Var as a functional level variable.

function sayHi() {
    if (true) {
        var phrase = "Hello.";
    }

    alert(phrase);
}

sayHi();
alert(phrase);