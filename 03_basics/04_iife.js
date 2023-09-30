// Immediately Invoked Function Expressions (IIFE)

//for removing global scope polution(variables or declaration) we use IIFE.

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
}) ();

//(function defnition)(function execution)
// for ending of first code we should always use semicolon (;)
//without ; iife will throw out error

//unnamed IIFE
( (name) => {
 console.log(`DB CONNECTED TWO ${name}`);
}) ('vikrant')