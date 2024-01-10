//5
alert("Hello, this is your calculator speaking.")

// 1
let num1 = Number(prompt("Enter a number."))

// 2
let num2 = Number(prompt("Enter another number."))

// 3
let operator = prompt("Select an operator (+, -, *, or /).")

// 4
if (operator === "+") {
    alert(`Result is ${num1 + num2}`)
} else if (operator === "-") {
    alert(`Result is ${num1 - num2}`)
} else if (operator === "*") {
    alert(`Result is ${num1 * num2}`)
} else if (operator === "/") {
    alert(`Result is ${num1 / num2}`)
} else {
    alert("Please use the correct operator.")
}

// 5
alert("Goodbye.")