const name = "vikrant"
const age =  23

//console.log(name + age + " years"); //Not recomended to use 

//string Interpolation   //Always use back tick (` `) method.
console.log(`Hello my name is ${name} and my age is ${age}`);


// const gameName = new String('BGMI')
// console.log(gameName[0]);  //B
// console.log(gameName[1]);  //G
// console.log(gameName[2]);  //M
// console.log(gameName[3]);  //I
// console.log(gameName.__proto__);

// console.log(gameName.length);  //4
// console.log(gameName.toLowerCase());  //bgmi

// //to find value of index
// console.log(gameName.charAt(0));  //B
// console.log(gameName.charAt(1));  //G
// console.log(gameName.charAt(2));  //M
// console.log(gameName.charAt(3));  //I

// // to find index of charector
// console.log(gameName.indexOf('B')); //0
// console.log(gameName.indexOf('G')); //1
// console.log(gameName.indexOf('M')); //2
// console.log(gameName.indexOf('I')); //3



//subString and slice method
const gameName = new String('BGMI-PC')

const newString = gameName.substring(0, 4)  // in subString we can not use negative value
console.log(newString );


const anotherString = gameName.slice(-2, 4)  // in slice we can use negative value
console.log( anotherString );



//trim method
const newStringOne = "   vikrant    "
console.log(newStringOne);
//trim removes before and after spaces 
console.log(newStringOne.trim());


//Replace method
const url = "https://vikrant.com/vikrant%20singh"

console.log(url.replace('%20', '-'))

//we can also ask question that the given keyword is in url or not
console.log(url.includes('vikrant'))  //true
console.log(url.includes('vikroo'))  //false


console.log(gameName.split('-'));

