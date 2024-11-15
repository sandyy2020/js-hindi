

{
    //this curly braces is called scope which is used in function, loop.
}

//var c=300 //global scope
let a=300
{
    let a=10
    const b=20    //local scope
    //var c=30
    console.log('INNER:',a)
}

console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username="sandy"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

if(true){
    const username= 'sandyy'
    if(username == 'sandyy'){
        const website="youtube"
        console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

///************interesting****/

console.log(addone(5))
function addone(num){
    return num+1
}


//addTwo(5) //addTwo cannot be declare first 
const addTwo=function(num){
    return num+2
}
