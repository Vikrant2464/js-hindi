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

// console.log(typeof bigNumber);  //undefined
// console.log(typeof outsideTemp);  //object
// console.log(typeof scoreValue);  //number
// console.log(typeof myFunction);  //function
// console.log(typeof anotherId);  //symbol


//******************* Memory ************************/

// Stack (Primitive),    Heap (Non-Primitive)
// In stack we get copy of the value and change occur in that value
let myName = "vikrant"

let anotherName = myName
anotherName = "Mr.singh"

console.log(anotherName);
console.log(myName);


// In Heap we get refrence that means changes occurs in original value
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "vik@google.com"

console.log(userOne.email);
console.log(userTwo.email);