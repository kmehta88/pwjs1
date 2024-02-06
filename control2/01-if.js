
let temp=26

if (temp < 20){
    console.log("Uff, Weather is COLD");
} else {
    console.log("Oh, Weather is HOT")
}
console.log("This will execute as it is outside of block/scope ");
console.log("===================================================");




let score = 110
//const life = 3 //TypeError: Assignment to constant variable.
let life = 2
//let bullets = 1000
let bullets = 1000 // Global scope concept learnt.
console.log("Welcome to the Game !");
if (score > 99) {
    console.log("You gain a life");
    score -= 100
    //score = score - 100

    life++
    //life = life + 1

    //let bullets = 2000
    //Trying to access something which is not outside of scope --> ReferenceError: bulltes is not defined --> Behavioral change of jave script.
    
    bullets = 3000 // Any body can access if variable in Global scope.

    console.log(`Bullets = ${bullets}`)
} else {
    console.log("You won't get a life");
}
//console.log(`Your current score = ${score} and life =${life} and Bullets = ${bullets}`);
//console.log(`Your current score = ${score} and life =${life}`);
console.log(`Your current Score is ${score} , Life is ${life} & Total Bullets are ${bullets}`);
console.log("===================================================");



// Short hands

let balance = 500
// One liner is allowed w/o braces.
if (balance>100) console.log("Balance is more than 100");
console.log("===================================================");

/*
// Trick
if (balance>100) 
    console.log("Balance is more than 100"),
    console.log("Printing again Balance is more than 100"),
    console.log("Printing again Balance is more than 100");
*/

//codeshare.io -- Live write code together.

/*
let getStarFromUser = "3"
let starInNumber = parseInt(getStarFromUser)

if (starInNumber == 1){
    console.log ("poor");
}

if (starInNumber == 2){
    console.log ("emm. ok");
}

if (starInNumber == 3){
    console.log ("average");
}
*/

// you can never check the condition in else part. Only If block can check the condition.
//let getStarFromUser = "10"
let getStarFromUser = "2"
let starInNumber = parseInt(getStarFromUser)

if (starInNumber == 1){
    console.log ("Poor");
} else if (starInNumber == 2) {
    console.log ("Emm.. ok");
} else if (starInNumber == 3) {
    console.log ("Average");
} else if (starInNumber == 4) {
    console.log ("Cool");
} else if (starInNumber == 5) {
    console.log ("Super");
} else if (starInNumber == 6) {
    console.log ("Awesome");
} else if (starInNumber == 7) {
    console.log ("Delicios, you nailed it");
} else {
    console.log("This rating is not in our system");
}  


// short hand syntax -- One line for else part ?
let scene = 9
if (scene == 10) console.log('log if part');
else console.log('print else part');