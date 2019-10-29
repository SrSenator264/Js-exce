// const num1 = 100;
// const num2 = 50;
// let val;

// //Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 % num2;
// //console.log(val)
// // Math Object
// val = Math.PI;
// val = Math.E;
// VAL = Math.round(2.4);
// val = Math.ceil(2.1);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8,2);
// val = Math.min(2,33,4,1,55,1,6,3,-2);
// val = Math.max(2,33,4,1,55,1,6,3,-2);
// val = Math.random()


// val = Math.floor(Math.random() * 20 + 1)
// console.log(val)

//////////////
function lottery(){

let luckyNumber = Math.floor(Math.random() *100 + 1);
if(luckyNumber == userNumber){
    return  +'win'+' '+ 100 + '$'
}else if(Math.abs(userNumber - luckyNumber)<=10){
    return 'win' + `${100-( userNumber- luckyNumber)*10}`+"$"
}else{
    return 'Looser'
}

}
let userNumber = Math.floor(Math.random() *100 + 1);
console.log(userNumber)
console.log(lottery())


