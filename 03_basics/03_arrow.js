const user = {
   username: "vikrant" ,
   price: 999,

   welcomeMessage: function() {
    console.log(`${this.username} , welcome to website`);
    //console.log(this);
   }
}
// user.welcomeMessage()
// user.username = "saurabh"
// user.welcomeMessage()

//console.log(this);     //empty


// function chai() {
//     let username = "vikrant"
//     console.log(this.username);
// }

// chai()


const chai = () => {
    let username = "vikrant"
    console.log(this.username);
}

//chai() 


//Explisit return
// const addTwo = (num1, num2) => {
//  return (num1 + num2)
// }

//implisit return
//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "vikrant"})  //return object method


//console.log(addTwo(3, 4))



