//const tinderUser=new Object() //it is singleton object
const tinderUser={} //it is not singleton object

tinderUser.id="123abc"
tinderUser.name='sand'
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:'sandy@gmail.com',
    fullname:{
        userfullname:{
            firstname:'sandy',
            lastname:'sk'
        }
    }
}
//console.log(regularUser.fullname.userfullname)

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2) //{} it is an optional 
const obj3={...obj1,...obj2}
console.log(obj3)

const users=[
{
    id:1,
    email:'sandy@gmail.com'
},
{
    id:1,
    email:'sandy@gmail.com'
},
{
    id:1,
    email:'sandy@gmail.com'
},
{
    id:1,
    email:'sandy@gmail.com'
}
]
users[1].email

//console.log(tinderUser)
//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//destructuring
const course={
    coursename:'js in hindi',
    price:'999',
    courseInstructor:'sandyy'
}
//course.courseInstructor

//const{courseInstructor}=course //course is an object and courseInstuctor is a value extractor
//console.log(courseInstructor)

const{courseInstructor:instuctor}=course // here courseInstructor can be used as instuctor, this is called object disstructor
console.log(instuctor)

//********json format */
//{
//    'name':'sandy',
//    'coursename':'js in hindi ,
//    'price':'free'
//}

//[
//    {},
//    {}
//]
//Both above are in json format

//spread operator(...obj)
const username={
    name:"sandeep",
    email:"sandeep@google.com"
}
const userdetails={
    address:"New Delhi",
    pin:11096
}

const objj={...username,...userdetails} //... is used as spread operator in object od username and userdetails
console.log(objj)

//object disstructor 
const state={
    bihar:"nitesh",
    haryana:"nayabsingh"
}
console.log(state.haryana)
console.log(state['bihar'])

const{haryana:har}=state // here haryana can be used as har, this is called object disstructor
console.log(har)