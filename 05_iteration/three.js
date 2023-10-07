// for of

// const arr =  [1, 2, 3, 4, 5]

// for(const num of arr){
//     console.log(num);
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }


// Maps***********for of loop on map**************

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('AUS', "Australia")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value)
}