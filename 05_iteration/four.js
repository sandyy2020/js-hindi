const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby'
}
// for(const key in myObject){
//     console.log(key);
// }
// for(const key in myObject){
//     console.log(myObject[key]);
// }
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=["js",'rb',"py",'java']
for(const key in programming){
    console.log(programming[key]);
}