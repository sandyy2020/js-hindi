//Array

const myArr=[0,1,2,3,4,5] //0,1 are the elements

console.log(myArr[3])
//js array-copy-operations create shallow copies.
//shallow copy of an object is a copy whose properties share the same references.
//deep copy of an object is a copy whose properties doesnot share the same references.

const myHeros=['shaktimaaan','naagraj']
const myArr2=new Array(1,2,3,4,5)
console.log(myArr2[1])
console.log(myHeros[0])

//Array Methods
myArr2.push(6)
myArr2.push(7)
myArr2.pop()
console.log(myArr2)

myArr2.unshift(9) //add on the first of the array
myArr2.shift() //delete the first added 9
console.log(myArr2)
console.log(myArr2[0])
console.log(myArr2.includes(9))
console.log(myArr2.indexOf(9))
console.log(myArr2.indexOf(3))

//slice,splice
console.log('A',myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)
