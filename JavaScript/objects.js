// first name
// last name
// age
// email address
// works from home
// address
// number of pets
// owns car

// var user = [
//     "Cody", 
//     "Thaller", 
//     30, 
//     "sthaller@codingdojo.com", 
//     true, 
//     "not telling", 
//     1, 
//     true
// ]

var user = {
    firstName: "Cody",
    lastName: "Thaller",
    age: 30,
    email: "sthaller@codingdojo.com",
    worksFromHome: true,
    address: "123 main street",
    numPets: 1,
    ownsCar: true,
    students: [
        {
            firstName: "Simon",
            lastName: "van Tulder"
        },
        {
            firstName: "Peter",
            lastName: "Hellwege"
        },
        {
            firstName: "Tarhata",
            lastName: "O'Brien"
        },
        {
            firstName: "Chiho",
            lastName: "Lee"
        }
    ]
}

// console.log(user.firstName)

// arr[2] = 3
user.firstName = "Not Cody"

// console.log(user);

// console.log(user.firstName + " " + user.lastName)

// console.log(user.students[1]);

user.students[user.students.length-1].lastName;


var students = [
    {
        firstName: "Simon",
        lastName: "van Tulder"
    },
    {
        firstName: "Peter",
        lastName: "Hellwege"
    },
    {
        firstName: "Tarhata",
        lastName: "O'Brien"
    },
    {
        firstName: "Chiho",
        lastName: "Lee"
    }
]

console.log(students[students.length-1].lastName)

