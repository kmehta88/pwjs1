/*
const myArray = [1,2,3,4,5]
const myNewArray = new Array(1,2,3,4,5)
console.log(myArray[1]);
*/

//const dcHeroes = ["batman", "superman", "flash", true, 1, 2] // Multiple data types.
const dcHeroes = ["batman", "superman", "flash"]
console.log(dcHeroes.length);

// dcHeroes[dcHeroes.length] = "wonder women"
// console.log(dcHeroes);

dcHeroes.push("wonder women")
console.log(dcHeroes);

let lastHero = dcHeroes.pop()
console.log(dcHeroes);
console.log(lastHero);
