// Javascript Execution Context
//   1.Global Execution Context (refer by variable this)
//   2.Function Execution Context
//   3.Eval Execution Context

// JS executes in two phases
// 1. Memory Creation Phase (Creation Phase)
// 2. Execution Phase

// let val1=10
// let val2=5
// function addNum(num1,num2){
//     let total=num1+num2
//     return total
// }
// let result1=addNum(val1,val2)
// let result2=addNum(10,2)

// 1.Global Execuction(Global environment)->this
// 2.Memory Phase
// val1=>undefined
// val2=>undefined
// addNum=>definition
// result1=>undefined
// result2=>undefined
// 3.Execution Phase
// val1<=10
// val2<=5
// addNum=>new variable environment+ execution thread