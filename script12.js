// console.log("hello dipak")

//  Variables
// var a = 5
// var b = 9
// console.log("sum of number is : " ,a+b)

// {
//     let a = 10
//     console.log(a)
// }

// console.log(a)


// Conditional Statement 

// let age = 18

// if(age > 18){
//     console.log("You can Vote")
// }else{
//     console.log("You can't Vote")
// }

// let marks = 78

// if(marks>60 && marks<70){
//       console.log("grade B")
// }else if(marks>70 && marks<80){
//     console.log("grade A")
// }else{
//     console.log("grade C")
// }

// let Employee = {
//     name : "Ramu",
//     salary : 50000 
// }

// Employee.ID = 124

// Employee["post"] = "Manager"

// delete Employee.name

// delete Employee["salary"]

// Object.freeze(Employee)

// Employee.salary = 200000

// Employee["salary"] = 30000

// console.log(Employee)

// let details = {
//     name : "ramu",
//     address : {
//         state : {
//             city : "pune",
//             pincode : 123455
//         }
//     }
// }


// console.log(details.address?.state.city)

// console.log("hello")

// function printBag(name , size , color , price){
//         return {
//             name : name,
//             size : size,
//             color : color,
//             price : price
//         }
// }

// let bag = printBag("safari" , "60L" , "black" , 5000)


// console.log(bag)


// let obj1 = {
//     let : 1,
//     const : 5,
//     return : 3,
//     for : 4
// }

// console.log(obj1.let + obj1.const + obj1.return + obj1.for)


// const employee = {
//     name : "john",
//     age : 30, 
//     id : 123
// }

// employee.name = "abc"

// console.log(employee)
// let token = Symbol("token")
// console.log(typeof token)

// let IFSC = Symbol("IFSC")

// const bankAccount = {
//     name : "HDFC",
//     token : "WERGFDE3F" ,
//     [IFSC] : "HDFC000234",
//     [token] : "WERGFDE3F"
// }

// bankAccount.token = "VVEDWGGEFF"

// console.log(Object.keys(bankAccount))
// console.log(Object.values(bankAccount))
// console.log(Object.entries(bankAccount))
// console.log(Object.getOwnPropertySymbols(bankAccount))

// console.log(bankAccount)

// for(let k of bankAccount){
//     console.log(bankAccount[k])  // not allow 
// }



// for(let k in bankAccount){
//     console.log(bankAccount[k])   
// }

// for(let k in bankAccount){
//     console.log(k , bankAccount[k])   
// }


// for(let k of Object.keys(bankAccount)){
//     console.log(k)                // not use this 
// }

// for(let k in bankAccount){
//     console.log(k , ":" , bankAccount[k])
// }

// let city1 = null 
// let city2 = "null" 

// console.log(city1 ?? "not available") // not available
// console.log(city2 ?? "not available") // null


// The Spread Operator (...) copies all enumerable properties from one object into another object

// let arr1 = [1,22]
// let arr2 = [2,3]
// let arr4 = [6,7]

// let arr3 = arr1.concat(arr2 , arr4) // right
// let arr3 = concat(arr1 , arr2 , arr4) // wrong

// merge = [...arr1 , ...arr2]

// console.log(merge)

// console.log(arr3)

// let arr1 = [10,20,30]
// let arr2 = [...arr1]

// console.log(arr1)

// let user1 = {
//     name : "john",
//     age : 20
// }

// let user2 = {...user1}


// let user2 = user1
// user2.name = "bob"

// console.log(user1.name)
// console.log(user2.name)

/*shallow copy :- copy only first level ,
 nested object still the  share the same memory
*/

// let emp1 = {
//     name : "bob",
//     age : 20,
//     address : {
//         city : "indore"
//     }
// }

// let emp2 = emp1
// let emp2 = {...emp1}
// emp2.name = "john"

// console.log(emp1.name)
// console.log(emp2.name)


// let emp3 = {
//     name : "bob",
//     age : 30
// }

// let copy = Object.assign({} , emp3)

// console.log(emp3.name)
// console.log(copy.name)

// deep copy :- a deep copy copies everything , including all nested objects and arrays

// structuredClone :- this function is used for deep copy

// let emp4 = {
//     name : "bob",
//     age : 30 , 
//     address : {
//         city : "vadodara"
//     }
// }

// let emp5 = structuredClone(emp4) 
// emp5.name = "john"
// emp5.address.city = "noida"


// console.log(emp4.address.city) // vadodara
// console.log(emp5.address.city) // noida

// this keyword :   

// let user1 = {
//     name : "don" ,
//     greet : function(){
//         console.log("hello " + user1.name)
//     }
    
// }

//  let user1 = {
//     name : "don" ,
//     greet : function(){
//         console.log("hello " + this.name)
//     }
    
// }

// let user2 = {
//     name : "john the don",
//     greet : function(){
//         console.log("hello " + user2.name)
//     }
// }

// let user2 = {
//     name : "john the don",
//     greet : function(){
//         console.log("hello " + this.name)
//     }
// }
// user1.greet()
// user2.greet()

// hoisting : - javascript  moves declaration to the top before executing the code

// console.log(name) //undefined

// var name = "john" // (var) varialble give  : undefined  var have no tdz(Temporal Dead Zone)

// let name = "jon" // tdz in let and const
// hi()
// function hi(){
//     console.log("hello") // function
// }


// hi()
// var hi = function(){
//     console.log("hello") // function expression
// }


// hi()
// let hi = function(){
//     console.log("hello") // function expression
// }

// DOM : JS can read modify & manipulate

// let heading = document.querySelector("#heading")

// console.log(heading.textContent)

// // heading.textContent = "DOM"

// document.querySelector("h1").textContent = "<b>js</b>" 

// document.querySelector("div").innerHTML 

// let quote = [
//     {
//     quote : "old is gold",
//     author : "john",
//     },
//     {
//     quote : "old  gold",
//     author : "john",
//     },
//     {
//     quote : " is gold",
//     author : "john",
//     },

//     {
//     quote : "old is ",
//     author : "john",
//     }
   
// ]

// let quote = document.querySelector("#quote")
// let author = document.querySelector("#author")

// document.querySelector("next").onclick = function(){
//     let ramdom = Math.floor(Math.random()*qoutes.length)
//     quote.textContent  = quotes[random].quote
//     quote.textContent  = quotes[random].author
// }

// const box = document.querySelector(#btn)

// document.querySelector("mousemove" , function(e){
//     console.log(e.clientX , e.clientY)
// })

// what is form ?

// examples -> typing.. , value change , reset

// event list 

// submit -> form submit
// reset -> form reset 
// input -> for every character it will type or(live value0)
// change  -> final value 
// focus -> when we click on  input box 
// blur -> out of the input focus 
// invalid -> validation failed 


const regex = /a..b/

console.log(regex.test("afc"))