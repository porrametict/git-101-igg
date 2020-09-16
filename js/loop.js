const arr = [
    "John",
    "Jane",
    "James",
    "Joe",
    "June",
]

for(let i=0;i < arr.length;i++){
    console.log(arr[i]);
}

for(let index in arr) {
    console.log(arr[index]);
}

arr.forEach((item,index)=>{
    console.log(item,index);
})

arr.map((item,index)=>{
    console.log(item,index);
})

arr.map((item,index)=>{
    console.log(item,index);
})
