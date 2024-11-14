
function sayMyName(){
    console.log("s")
    console.log("m")
    console.log("s")
}
sayMyName()

//function addTwoNumbers(num1,num2){    //num1,num2 are parameter
//   console.log(num1+num2) 
//}
//addTwoNumbers(4,5) //4,5 are argument

function addTwoNumbers(num1,num2){    //num1,num2 are parameter
    //let result=num1+num2
    //return result 

    return num1+num2
 }
 const result=addTwoNumbers(3,5)
 //console.log("Result:",result)

 function loginUserMessage(username='sam'){     //username is initialise as sam if no any value of date is given to username
    //if(username===undefined){ 
    //or
    if(!username){
        console.log('pls enter a username')
        return
    }
    return `${username} just logged in`
 }
 //console.log(loginUserMessage("sandy"))
 //console.log(loginUserMessage())

 function calculateCartPrice(...num1){  //here ... is rest operator
    return num1
 }
 //console.log(calculateCartPrice(200,400,500,2000))

 /////********Object is pass through function****/
 const user={
    username:'sandy',
    price:99
 }

 function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
 }

 //handleObject(user)
 handleObject({
    username:'sam',
    price:49
 })

 ////*******Array is passed through function *****/
 const myNewArray=[200,300,400]

 function returnSecondValue(getArray){
    return getArray[1]
 }
 
 //console.log(returnSecondValue(myNewArray))
 console.log(returnSecondValue([500,750,200]))