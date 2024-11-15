//In browser, global object is window object 

const user={
    username:"sandyy",
    price:299,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this)

// function chai(){
//     let username="sandy"
//     // console.log(this)
//     console.log(this.username)
// }
// chai()

// const chai=function(){
//     let username="sunny"
//     console.log(this.username)
// }
// chai()

const chai=()=>{      //arrow function      
    let username='sunny'
    // console.log(this.username)
    console.log(this)
}
// chai()

const addTwo=(num1,num2)=>{
    return num1+num2 //explicit return means return is used in function
}
console.log(addTwo(3,4))

const addThree=(num1,num2)=> num1+num2
console.log(addThree(5,4))

const addFour=(num1,num2)=> (num1+num2) //implicit return means return is not used in function and (,)should be used 
console.log(addFour(5,5))

const addFive=(num1,num2)=> ({username:"sunny",add:num1+num2}) //implicit return means return is not used in function
    console.log(addFive(15,5))


