// A function is a reusable block of code designed to perform a specific task. It helps organize code into modular, manageable parts that can be called multiple times throughout a program.

// A BLOCK OF CODE => PERFORMS A TASK

// A FUNCTION DECLARATION (defining a function)
function square(number) {
    return number + number;
}

// A FUNCTION CALL (calling/executing a function)
const result = square(5);
console.log(result);

function greet(name, lastName) {
    console.log('Hello '+ name +' ' + lastName + ', welcome to the world of JavaScript!')
}

greet('Jhulan', 'Dey');

// A functiond declaration
function dname(params) {
    //statements
    // have access to "this" keyword
}

// A function expression
const hname = function(params) {
    // statements
}

// Arrow function
const $name = (params) => {
    //statements
    // use arrow functions - its the modern way to create javascript functions
}


function iGreet(name, lastName) {
    console.log(`Hi, ${name} ${lastName}`);
}

iGreet('John', 'Doe');


// Every function in JavaScript returns undefined unless otherwise specified

function add(a, b) {
    console.log(1);
    // console.log(1);Prints 1 to the console.
    return ("Does return!");
    // Returns the string "Does return!".
    // As soon as the return statement is executed, the function immediately exits. Any code after this line is not executed.
    console.log(2); // This line never runs! Because the function has already exited after the first return
    return a + b;
    console.log(3);
}

const sum = add(20, 25);
console.log(sum);


// Key Features of Arrow Functions:

// Use => (arrow) between parameters and the function body.
const iArrow = (number) => {
    return number * number
}

const iResult = iArrow(6);
console.log(iResult);

// If the function has a single expression, you can omit {} and the return keyword — the expression is returned implicitly.

// If there is only one parameter, you can omit the parentheses around it.
const isquare = x => x * x;
console.log(isquare(6));

// If there are no parameters, use empty parentheses ().
const sayHello = () => 'Hello World!';
console.log(sayHello());

// Arrow functions do not have their own this, arguments, or super, making them especially useful for callbacks and methods where lexical this is desired.