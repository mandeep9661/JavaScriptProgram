// print any thin in output
console.log("Hello, Mandeep")

// for executing the program command : node <fileName with extension>

//Vriables

let a = 7
console.log(a)

// get the type of variable is 
console.log(typeof(a))

// decimal number is come under number only  in javascript
let b = 3.948
console.log(typeof(b))

let c = "Mandeep Kumar"
console.log(typeof(c))

let required = true
console.log(typeof(required))

let add = a + b
console.log(add)

c = a + b
console.log(c) // this is working because we can change the value of variable declared with let keywords
// let c = a + b
// console.log(c) // this is not working because we cannot redeclare variable with let keywords

//we cannot redeclare variable with let keywords but possible with var keywords
var a1 = 10
var b1 = 20
var c1 = "Mandeep Kumar"
var c1 = a1 + b1
console.log(c1) // this  is working because we can redeclare variable with var keywords

// if we declare the variable with const keywords then we cannot change the value of variable and also cannot redeclare the variable
const a2 = 10
const b2 = 20
const c2 = "Mandeep Kumar"
// c2 = a2 + b2 // this is not working because we cannot change the value of variable declared with const keywords
// const c2 = a2 + b2 // this is not working because we cannot redeclare variable with const keywords

// negation operator
console.log(!required)