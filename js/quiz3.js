let point = 0
let grade; 
if(point >= 81 && point <=100){
    grade = 'A'
}else if(point >= 71 && point <=80){
    grade = 'B'

}else if(point >= 61 && point <=70){
    grade = 'C'

}else if(point >= 51 && point <=60){
    grade = 'D'

}else if(point >= 0 && point <=50){
    grade = 'F'
}else {
    grade = 'Unknown'
}

console.log(`score : ${point} , grade : ${grade}`);