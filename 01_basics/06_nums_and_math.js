const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));       //100.00

// const otherNumber = 23.8966   //23.9
const otherNumber = 123.8966     //124

// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));       //123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//******************** Math ***********************

// console.log("Math"); 
// console.log(Math.abs(-4));         //4
// console.log(Math.ceil(4.6));      //5
// console.log(Math.floor(4.7))        // 4
// console.log(Math.round(4.5));    //5
// console.log(Math.min(4, 3, 6, 8));   //3
// console.log(Math.max(4, -3, 6, 8));   //8

console.log(Math.random());  //Always gives value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
//let randomNum = (Math.random() * ((max+1)-min))+min;

console.log(Math.floor(Math.random()* (max - min +1)) + min)


