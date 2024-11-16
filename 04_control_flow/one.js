//if

const isUserLoggedIn=true
if(2 != 3){
    console.log("executed")
}

const temp=35
if(temp<40){
    console.log('Temp is less hot')
}else{
    console.log('Temp is too hot')
}

// <, >, <=, >=, ==, !=, === comparison operator

const score=300
if(score>100){
    const power="fly"
    console.log(`User power: ${power}`)
}

const balance=1000
if(balance>500) console.log("test") //it is called implict scope which is written in one line only

if(balance<500){
    console.log("less than 500")
}else if(balance<750){
    console.log("less than 750")
}else{
    console.log("less than 1000")
}
