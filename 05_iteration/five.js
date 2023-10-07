
//****************for each loop */

const coding = ["js", "ruby", "java", "python", "ccp"]

// coding.forEach( function (val) {
//  console.log(val);
// })

// coding.forEach( (items)=> {
//     console.log(items);
// })


// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
});
