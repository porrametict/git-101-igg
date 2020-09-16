for(let i=1 ;i<=20;i++){
        console.log(i);
}

for(let i=2;i<=20;i += 2){
    console.log(i);
}

let new_val =[-1,2,3,56,6,-93,0,4].map( (e) => e*2)
console.log(new_val);


let new_val2 = [10,13,44,55,89,0,12,1].filter (e=>{
    return Math.abs(e % 2) ==0 
})
console.log(new_val2);