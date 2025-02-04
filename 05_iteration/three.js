//Array specific loop

// for of

//["",'',""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

const greetings="Hello world!"
for(const greet of greetings){
    console.log(`Each Char is ${greet}`);
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA','United State of America')
map.set('Fr',"France")
console.log(map);

for(const key of map){
    console.log(key);
}

//map is used for unique value, duplicate value is not shown 
//the result of map is shown in same order as it is written
// check map documentation

for(const [key,value] of map){
    console.log(key,':-',value);
}

const myobject={
    'game1':'NFS',
    'game2':'spiderman'
}

for(const[key,value] of myobject){
    console.log(key,':-',value); //myobject is not iterable so it is not used directly
}