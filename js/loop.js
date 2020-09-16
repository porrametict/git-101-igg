// const arr = [
//     "John",
//     "Jane",
//     "James",
//     "Joe",
//     "June",
// ]

// for(let i=0;i < arr.length;i++){
//     console.log(arr[i]);
// }

// for(let index in arr) {
//     console.log(arr[index]);
// }

// arr.forEach((item,index)=>{
//     console.log(item,index);
// })

// arr.map((item,index)=>{
//     console.log(item,index);
// // })

// let val = arr.map((item,index)=>{
//     return `${index}.${item}`
// })

// console.log(val);


let fillterMoreThanZero = [-1,2,3,-6645,0,51,3].filter(e => {
    return e > 0
})
console.log(fillterMoreThanZero);