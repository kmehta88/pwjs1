/*
// String looks like 'Hello'
// String looks like "kapil"

const firstname = 'kapil'
const lastname = "mehta"

console.log(firstname + ' ' + lastname);

console.log(`my first name name is ${firstname} and last name is ${lastname}`); // template literal

// const username = 'kapil.com' // short hand notation
const username = new String('kapildotcom')  // Behind the scene
console.log(username[0]);
console.log(username.length);
console.log(username.charAt(2));
console.log(username.substring(2,4));

let email = "  kapil@km.com  "
console.log(email);
console.log(email.trim());

let emailTwo = "kmehta88@hotmail.com"
console.log(emailTwo.replace('kmehta', 'devansh'));
console.log(emailTwo.includes('kmehta'));
console.log(emailTwo.toUpperCase());
*/

// const num = 5 //short hand way for declaring numbers.

const myNumber = new Number(5.234674)
console.log(myNumber);
console.log(myNumber.toFixed(2));

const subscribers = 100000
console.log(subscribers.toLocaleString());

//Useful stuff
console.log(Number.MAX_VALUE);
console.log(Math.PI);
console.log(Math.random()); // Number between 0 and 1(0.999999...)
console.log(Math.random()*10); // Number between 0 and 10(9.999999...)

console.log(Math.floor(Math.random()*10)); // 0 to 9
console.log(Math.floor(Math.random()*10)+1); // 1 to 10



