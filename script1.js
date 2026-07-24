
// 1 . 

// const { use } = require("react")

// let student1 = {
//     name  : "bob",
//     age : "20"
// }

// let student2 = student1

// student2.name = "john"

// console.log(student1)
// console.log(student2)

// 2 . 

// let employee = {
//     name : "jon",
//     department : "IT"
// }

// let employee1 = {...employee}

// employee1.department = "cyber security"

// console.log("employee : " ,employee)
// console.log("employee1 : " ,employee1)

// 3 . 

let user = {
    name : "don" ,
    address : {
            city : "vadodara",
            pincode : 124576
    }
}

let user1 = {...user}

user.address.city = "pune"

console.log("user : " , user)
console.log("user1 : " , user1)


