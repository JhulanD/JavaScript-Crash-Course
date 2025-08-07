//Creating and assigning a variable through three types of keywords//
/*
In JavaScript, var, let, and const are called variable declaration keywords or variable declaration statements.
*/
// var nameOn ='Duck';
// let varName = "Variables and Data Types";
// const variableName = 'Hello!';

// //Creating variable using const keyword//
// const letVariable = "let";
// const constVariable = "const";

// //using and learning const and assigning a variable//
// const $name = 'John Doe';
// const _name = 'Jane Doe';
// const name = 'Johny Doe';

// //making javascript code readable using console.log//
// console.log(nameOn);
// console.log(varName);
// console.log(variableName);
// console.log(letVariable);
// console.log(constVariable);
// console.log($name);
// console.log(_name);
// console.log(name);

//single line comment
/*
multi line comment-
hello world - its a multi lien comment
 */

//Variable Naming Rules//
/*
1. A variable name must start with a letter, underscore or dollar sign.
2. A variable name can contain alpha-numeric characters and underscores.
3. A variable name cannot start with a number.
4. Variable names are case-sensitive.
5. Reserved keywords cannot be used as variable names.
6. Variable names should be meaningful.
7. Variable name should b unique!
*/


//There are few type of Data types in Javascript//

//In JavaScript, data types are essential for understanding and manipulating information within a program.

// Category	Data Types--
    // Primitive - 
            // String, Number, BigInt, Boolean, Undefined, Null, Symbol
    // Non-Primitive - 
            // Object (includes standard objects, arrays, functions, etc.)

//STRING//
const exampleString = 'Hello world! Its a good day';
console.log(exampleString);

//in Javascript there are 3 type of quotes//
const exampleString1 = "Hello world! Its a double quote!";
const exampleString2 = `Hello world 1! Its a back tick!`;
const exampleString3 = 'Hello world 2! Its a single quote!';
console.log(exampleString1);
console.log(exampleString2);
console.log(exampleString3);

//In Javascript backticks can be used for string interpolation//
const iName = 'Olive Dey';
const iAge = 15;
const iMsg = `my daughter's name is ${iName} and she is ${iAge} years old today!`;
console.log(iMsg);

//In Javascript backticka also use to use mathematical calculations//
const iCal = `${2 + 2}`;

console.log(iCal);


//Numbers
const wholenumeber = 10000;
const decimalNumber = 0.353535;

console.log(wholenumeber);
console.log(decimalNumber);

const firstNumber = 10;
const secondNumber = 20;

const result = firstNumber * secondNumber;

console.log(result);

// Boolean type
        // The Boolean type represents a logical entity and is inhabited by two values:
        // true - yes, correct, 1
        // false - no, incorrect, 0
const isCool = 0;

console.log(typeof isCool);

if(isCool) {
    console.log("Hi Man, you are cool!");
} else {
    console.log('Hi stranger!');
}

        // Boolean values are usually used for conditional operations, including ternary operators, if...else, while, etc.


// Null
    // Null represents the intentional absence of any object value. It is often used to denote the absence of a value or the end of a list. In JavaScript, null is a primitive value that is treated as an object.

    // In JavaScript, null is a special value that means "no value" or "empty."
        let age = null;
        
    // This line assigns a new value (20) to the existing age variable. Now, the value of age is no longer null—it is 20 (a number).
        age = 20;

    // This line prints the value of age to the console. Since you updated age to 20, this will output:20
        console.log(age);

// Undefined
        // In JavaScript, the undefined type represents a variable that has been declared but not yet assigned a value. It is considered a primitive data type and is used to indicate the absence of a value. When a variable is declared but not assigned a value, it is automatically assigned the undefined type. Similarly, when a function is called with fewer arguments than declared, the missing arguments will be assigned the value of undefined.

        // Variable declared but not initialized
        let a;
        console.log(a); // Output: undefined

//Objects
    // In JavaScript, the object data type is a non-primitive type used to store collections of data and more complex entities. An object consists of properties—key-value pairs—where each key is a string (or symbol), and each value can be any data type, including numbers, strings, arrays, other objects, or functions (methods).

    const person = {
        name: 'John',
        age: 20,
    }

    console.log(person);

    //Dot notation
    console.log(person.name);
    console.log(person.age);
    console.log(typeof person.name);

    const date = new Date();
    console.log(date);


// JavaScript is a dynamically typed language, which means:

    // You don't have to declare the data type of a variable explicitly.

    // Variables can hold values of any type, and the type can change during program execution.

    // The type of a variable is determined at runtime, based on the value assigned to it.

    // You can assign a number to a variable, then later assign a string to the same variable, without errors.

    let x = 10;      // x is a Number
console.log(typeof x);  // Output: "number"

x = "Hello";    // Now x is a String
console.log(typeof x);  // Output: "string"

x = true;       // Now x is a Boolean
console.log(typeof x);  // Output: "boolean"
