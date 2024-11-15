

{
    //this curly braces is called scope which is used in function, loop.
}

//var c=300 //global scope
let a=300
{
    let a=10
    const b=20    //block scope
    //var c=30
    console.log('INNER:',a)
}

console.log(a)
//console.log(b)
//console.log(c)