// Immediately Invoked Function Expressions(IIFE)

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()

(function chai(){
    console.log(`DB CONNECTED`)
})();

( ()=>{
 console.log(`DB CONNECTED TWO`)
})()


//()(); for iffe ; is also compulsory
//iffe is a function which is used for immediately execution.And the main function of iife is to solve the problem of global scope pollution.
