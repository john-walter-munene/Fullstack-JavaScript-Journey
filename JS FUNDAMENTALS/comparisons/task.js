const password = "TheMaster"

let user = prompt("Who is here?")

if (user == "Admin") {
    let codeCheck = prompt("What is your password?")

    if (codeCheck === password) {
        alert("Welcome")
    } else if (codeCheck == "Other") {
        alert("Wrong Password")
    } else alert("Canceled")
} else if (user == "" || user == "Cancel") {
    alert("Canceled")
}else alert("I don't know you")
