// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 34567778655545n

// Refrence (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "vikrant",
    age: 23
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber);  //undefined
console.log(typeof outsideTemp);  //object
console.log(typeof scoreValue);  //number
console.log(typeof myFunction);  //function
console.log(typeof anotherId);  //symbol

