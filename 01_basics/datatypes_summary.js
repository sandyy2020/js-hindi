// Primitive datatype
// 7 types(call by value): String, Number, Null, Boolean, Undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outSideTemp=null
let userEmail

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)

const bigNumber = 54356789234n


// Non Primitive Datatype (Reference datatype)
// Array, Objects, Functions

const heros=["shaktimaan","naagraaj","doga"]
let myObj={
    name:"sandy",
    age:22
}
const myfunction=function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)
console.log(typeof myfunction)
console.log(typeof heros)

//https://262.ecma-international.org/5.1/#sec-11.4.3