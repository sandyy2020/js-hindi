// const coding=["js",'ruby',"java"]

const myNums=[1,2,3,4,5,6,7,8]
//using filter
// const newNums=myNums.filter((num)=> num>4)
// console.log(newNums);


//using foreach
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books=[
    {
        title:'Book One', genre:'fiction', publish:1981,edition:2004
    },
    {
        title:'Book Two', genre:'Non-fiction', publish:1992,edition:2008
    },
    {
        title:'Book Three', genre:'History', publish:1999,edition:2007
    },
    {
        title:'Book Four', genre:'Science', publish:2009,edition:2014
    },
    {
        title:'Book Five', genre:'Science', publish:2011,edition:2016
    },
]

let userBooks=books.filter((bk)=>bk.genre==='Science')
// userBooks=books.filter((bk)=>bk.publish>=2005)
userBooks=books.filter((bk)=>{
    return bk.publish>=1990 && bk.genre==='Science' //return is used
})  
console.log(userBooks);
