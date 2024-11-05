const name="sandy "
const repoCount=50

//console.log(name+repoCount+" value")
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

const gameName=new String('sunny-23')

console.log(name[3])
console.log(gameName[2])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('u'))

const newString=gameName.substring(0,6)
console.log(newString)

const anotherString=gameName.slice(-8,3)
console.log(anotherString)

const newStringOne=" popatlal  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="hhtps://sandy.com/sandy%20pd"
console.log(url.replace('%20','-'))
console.log(url.includes('com'))
console.log(url.includes('sama'))

console.log(gameName.split('-'))