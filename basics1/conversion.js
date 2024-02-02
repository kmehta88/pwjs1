// //explicit and implict
// data coversion
// coversion
// casting

// This example is Explict conversion.
//let bankBalance = '100'
//let bankBalance = ''
//let bankBalance = 'NaN'
let bankBalance = 'abc'

let bankBalanceInInt = parseInt(bankBalance)
console.log(bankBalance);
console.log(typeof bankBalance);
console.log(bankBalanceInInt);
console.log(typeof bankBalanceInInt);

let bankBalanceInBoolean = Boolean(bankBalance)
console.log(bankBalanceInBoolean);
console.log(typeof bankBalanceInBoolean);

//Truthy values (NaN) and falsy (0, empty) values.

console.log("================");
console.log(2 == 2);
console.log(NaN == NaN);
console.log(5 + undefined);
console.log(5 + null);

// undefined vs null - null is intensional defined value, 
// but for undefined there is no reserved memory space.

let c = null
console.log(c);
// console.log(d); // ReferenceError: d is not defined
