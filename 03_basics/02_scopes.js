var c= 300
let a = 300
if (true) {
    let a =10 
const b=20
var c= 30
//console.log("INNER: ",a);
}


//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "vikrant"

    function two(){
        const website= "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
//one()


if (true) {
    const firstname = "vikrant"
    if (firstname === "vikrant") {
        const secondname = " singh"
        //console.log(firstname + secondname);
    }
    //console.log(secondname);
}
//console.log(firstname);


//++++++++++++++++++++++ interesting +++++++++++++++++++++++


function addone(num){
    return num+1;
}
console.log(addone(5));


//addTwo(5)  //can not access addTwo before initialization 
const addTwo = function(num){
    return num+2;
}

addTwo(5)
