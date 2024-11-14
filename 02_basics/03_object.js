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
console.log(JsUser[mySym])

JsUser.email='chat@gmail.com'
console.log(JsUser.email) //use to freeze the object. Now value of email will not change further
Object.freeze(JsUser)
JsUser.email='test@gmail.com'
console.log(JsUser)