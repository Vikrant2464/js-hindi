//singleton
//object.create

//object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "vikrant",
    "full name": "vikrant singh",
    //mySym: "mykey1", //here the type of symbol property is string.
    [mySym]: "mykey1", //we should write the symbol property in square bracket[] for acting as symbol.
    age: 23,
    location: "Prayagraj",
    email: "singh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// //console.log(jsUser.full name); //we can not accesss this using dot(.) method. this will show error.
// console.log(jsUser["full name"]);
// // console.log(jsUser.mySym); //we can not access symbol using dot(.) method.it wil throw out undefined.
// console.log(jsUser[mySym]);
 

jsUser.email = "vik@google.com"
console.log(jsUser.email);
//Object.freeze(jsUser)  //freeze method freeze the js user. No changes will occue after freezing. 
console.log(jsUser);


jsUser.greeting = function() {
    
console.log("Hello js user");
}


jsUser.greetingTwo = function() {
    return `Hi I am, ${this.name}`  //we can also use this method
}  


    console.log(jsUser.greeting())
    console.log(jsUser.greetingTwo())





