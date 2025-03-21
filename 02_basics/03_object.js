//singleton
//object.create

//object Literals

const mySym=Symbol("key1") //key1 is declared as Symbol

const JsUser={
    name: "sandy",
    'full name':'sandy s',
    [mySym]:"mykey1", // [] is used to accessed symbol
    email:"sandy@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ['Monday','Saturday']
}

console.log(JsUser.email)
//console.log(JsUser.full name) // full name will never be accessed in this way
//or
console.log(JsUser['email'])
console.log(JsUser["full name"])
console.log(JsUser[mySym]) //used to access mySym as Symbol

JsUser.email='chat@gmail.com'
console.log(JsUser.email) //use to freeze the object. Now value of email will not change further
//Object.freeze(JsUser)
JsUser.email='test@gmail.com'
//console.log(JsUser)

JsUser.greeting=function(){
    console.log('Hello Js User')
}
JsUser.greeting2=function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())
