//reduce
//google=>reduce js mdn

const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(accumulator,currentvalue){
//     console.log(`acc:${accumulator} and curval:${currentvalue}`);
//     return accumulator + currentvalue
// },0)
// console.log(myTotal);

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);


const shoppingCart=[
    {
    itemName:'js course',
    price:2999
    },
    {
        itemName:'py course',
        price:999
    },
    {
        itemName:'mobile dev course',
        price:5999
    },
    {
        itemName:'data science course',
        price:12999
    }
]
const pricetopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);