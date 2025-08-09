// Comparison Operators = true/false

// Comparison operators are used to compare two values and return a boolean result — true or false. Here’s a quick overview of common comparison operators in JavaScript (and most programming languages):

// const a = 30;
// const b = 20;

// console.log(a<b);

// console.log(a>=b);

// Operator	Description	Example	Result
// ==	Equal to (loose equality)	5 == '5'	true
// ===	Strict equal to	5 === '5'	false
// !=	Not equal to (loose)	5 != '6'	true
// !==	Strict not equal to	5 !== '5'	true
// >	Greater than	7 > 5	true
// <	Less than	3 < 7	true
// >=	Greater than or equal to	5 >= 5	true
// <=	Less than or equal to	4 <= 3	false


// console.log(a!=b);

// // Strict Equality
// //Compares VALUES and DataTypes
// // console.log(a==b);

// // Stritct in-Equality
// console.log(a!==b);

// // Loose Equality by Doube Equal Sign ==
// // Doesnt compare DATATYPES
// // console.log(20 = '20')

// // The Good Ones: === and !===
// // The Evil Ones: = and !=
        // console.log('' == '0');
        // console.log(0 == '');
        // console.log(false=='false');
        // console.log(true == 1);
    //should nt hv been happened but it does due to loose equality of ==

//Always use 3 equals === unless you have good reasons to use double/loose euality ==

// Logical Operators
    // AND && => ALL OPERANDS ARE TRUE
        console.log(false && true);
    // OR || => At least one Operand is true => True
        console.log(true || false);
    // NOT ! 
        console.log(!true);
        console.log(!false);