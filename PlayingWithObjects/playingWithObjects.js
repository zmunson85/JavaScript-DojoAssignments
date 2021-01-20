///Objectives

// Practice iterating through an array of objects / dictionaries.
// Imagine that you are given an array of objects.For example,

// var users = 
//     {
//         name: "Michael",
//         age: 37
//     },
//     {
//         name: "John",
//         age: 30
//     },
//     {
//         name: "David",
//         age: 27
//     }
// ];
// How would you print / log John's age?
// How would you print / log the name of the first object ?
//     How would you print / log the name and age of each user using a for loop ? Your output should look something like this
// Michael - 37
// John - 30
// David - 27




var users = [
    {
        name: "Michael ",       // this is the index 0
        age: 37
    },
    {
        name: "John",              //this is index 1
        age: 30
    },
    {
        name: "David",     // this is index 2
        age: 27
    }
];
console.log(users[1].age)  // targeting objects inside of var users= John's age
console.log(users[0].name)  //targeting an object index 0 . name= Michael
for (var i = 0; i < users.length; i++) {
    console.log(users[i].name, users[i].age, users[i])  //this runs the loop targeting users
}



    // console.log(users[1].age)
// console.log(users[0].name)
// for (var i = 0; i < users.length; i++) {
//     console.log(users[i].name, users[i].age, users[i])
// }


