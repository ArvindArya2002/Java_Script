"use strict"; // treat all JS code as newer version
// alert(3+3) // it show error
/*
number => 2 to power 53
bigint
string => ""
boolean => true/False
null => standalone value
undefined =>
symbol => unique used most in React..
*/

// object
console.log(typeof "Arvind");
console.log(typeof null);// object
console.log(typeof undefined);// undefined
/*
    Types of DataTypes
        a) Primitive
        7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

        b) Refrence(Non primitive)
        Array,Objects,Functions
*/
// Symbol type Datatype
const id=Symbol('123')
const anotherId=Symbol('123')
// Arrays
const heros=["shaktiman","naagraj","doga"]
// Objects
let myobj= {
    name: "Arvind",
    age: 22,
}
// Function
const myFunction=function()
{
    console.log("Hello world");
    
}
console.log(typeof Function);
console.log(typeof Object);
console.log(typeof Array);
console.log(typeof BigInt);
console.log(typeof Number);
console.log(typeof null);
console.log(typeof undefined);
