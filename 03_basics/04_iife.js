// Immediately Invoked Function Expressions(IIFE)

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()

(function chai(){  //named IIFE
    console.log(`DB CONNECTED`)
})();

( ()=>{  //Unnamed IIFE
 console.log(`DB CONNECTED TWO`)
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('sandyy') //parameter passed


//()(); for iffe ; is also compulsory
//iffe is a function which is used for immediately execution.And the main function of iife is to solve the problem of global scope pollution.

const numbers=[1,2,3,4,5,6]; // Declares an array named 'numbers' with six elements.
(function abc(...number1){ // Defines an Immediately Invoked Function Expression (IIFE) named 'abc' with a rest parameter 'number1'.
    console.log(`print the number ${number1}`) // Logs a string to the console, interpolating the value of 'number1'.
})(numbers); // Calls the IIFE immediately, spreading the 'numbers' array as arguments to the function.

(function anything(...number1){
    console.log(`print the number ${number1}`);
})(1,2,3,4,5);

//(...)Rest Parameter: Used in function definitions to collect all arguments into an array.
//(...)Spread Operator: Used to spread elements of an array or properties of an object into individual elements or key-value pairs.