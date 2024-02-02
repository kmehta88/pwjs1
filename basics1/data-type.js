// Primitive (STACK)
/*
String
Number
Boolean
Null
undefined
Symbol -- Very unique
BigInt
*/

const firstname = "kapil"
const age = 20
const score = 30.4
let isLoggedIn = true
const node_version = null
let bankBalance = undefined
const buttonId = Symbol("id")
const aReallyBigNumber = 90008787876678n

console.log(firstname);
console.log(2+2);
console.log("2"+"2");

// JS Automatically interprets the data type.


// Reference (Non-Primitive) / These are also known as Objects (HEAP)
/*
Arrays
Objects
Functions
*/

// How to declare these ?

const numbers = [1,2,3,4,5]
const heroes = ["superman", 
    "batman", 
    "flash",
    true,
    123
]

const userObject = {
    name: "kapil",
    age: 20,
    isLoggedIn: true
}

const sayHello1 = [] // Array
const sayHello2 = {} // Object

const sayHello3 = function(){
    console.log("hello again")
}

// Functions are to store the functionality.

const registerAUser = function(){}
const loginUser = function(){}
