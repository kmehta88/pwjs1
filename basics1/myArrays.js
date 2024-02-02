/*
const myArray = [1,2,3,4,5]
const myNewArray = new Array(1,2,3,4,5)
console.log(myArray[1]);
*/

//const dcHeroes = ["batman", "superman", "flash", true, 1, 2] // Array can have Multiple data types.
const dcHeroes = ["batman", "superman", "flash", "GL", "Arrow"]
//console.log(dcHeroes.length);

// dcHeroes[dcHeroes.length] = "wonder women"
// console.log(dcHeroes);

dcHeroes.push("wonder women")
console.log(dcHeroes);

let lastHero = dcHeroes.pop()
//console.log(dcHeroes);
//console.log(lastHero);

//dcHeroes.shift("aquaman")
dcHeroes.unshift("aquaman")
console.log(dcHeroes);

//console.log(myArray.toString());
// console.log(dcHeroes.toString());
// console.log(dcHeroes.join("-"));


console.log(dcHeroes.slice(1,2)); // It will return the copy of array. // Original array will remain intact.  
console.log(dcHeroes);                                 

console.log(dcHeroes.splice(2,2)); // Original array will change.
console.log(dcHeroes);



// Learnings:- typeof is unary operator.
