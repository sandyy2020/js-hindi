// const userEmail="sandy.ai"
// const userEmail=""
const userEmail=[]

if(userEmail){
    console.log("Got user Email")
}else{
    console.log('Dont have USer email')
}

// falsy Values

// false,0,-0,BigInt (0n),"",null,undefined,NaN

// truthy value

// "0","false",'',[],{},function(){}

if(userEmail.length===0){
    console.log("array is empty")
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}