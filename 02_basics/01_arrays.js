// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[0])

//Array method

// myArr.push(6)   //[0, 1, 2, 3, 4, 5, 6]
// myArr.push(7)   //[0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop()     //[0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(8)   //[8, 0, 1, 2, 3, 4, 5]
// myArr.shift()      //[0, 1, 2, 3, 4, 5]


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));


//  slice,  splice
//slice manipulate orginal array but splice does not do that.

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log('D', myn2);