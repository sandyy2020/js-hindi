//Dates

let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)

let myCreateDate=new Date(2024,10,12) // month is started from 0 in js
console.log(myCreateDate.toDateString())

//let myCreatedDate=new Date(2024,11,12,3,53)
let myCreatedDate=new Date("2024-11-13")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())
newDate.toLocaleString('default',{
    weekday:"long",
})