//singleton

//const tinderUser = new Object()    // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sattu"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "vik@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vikrant",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
//const obj4 = Object.assign({}, obj1, obj2, ob)

const obj4 = {...obj1, ...obj2}
// console.log(obj4)


//when value came from data base

const users = [
    {
        id: 1,
        email: "v@gmai;.com"
    },
    {
        id: 1,
        email: "v@gmai;.com"
    },
    {
        id: 1,
        email: "v@gmai;.com"
    },
    {
        id: 1,
        email: "v@gmai;.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

/* D-structuring*/ 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)




