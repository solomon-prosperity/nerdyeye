//Asynchronous Nature of Nodejs
//Variables: syntax and scope
//Class, Objects and Arrays, Accessing items (dot and bracket notation)
//Array Methods
//Functions: function declaration, Function expression(arrow functions), IIFE(Immediately invoked function expression), callback functions
//Globals: __dirname, __filename, require
//module.exports
//Introduction to Nodejs core modules: fs, os, http, path


/**************************************************************************/
// console.log(__dirname)
// console.log(__filename)

// console.log(`first statement`)
// setTimeout(()=> {
//     console.log(`second statement`)
// }, 1000)

// console.log(`third statement`)

// let myNames = "Bilbo: Gandalf: Nazgul" ;
// let arr= myNames.split(":");
// console.log(arr)
// arr.forEach(name => {
//     console.log(`A message to ${name}`);
// });

//The main difference between a function expression and a function declaration is the function name, 
//which can be omitted in function expressions to create anonymous functions.



// let myNames = ["Bilbo", "Gandalf", "Nazgul" ];
// let str = myNames.join(",");

// let combine = myNames.join (" - ")

// console.log(str);
// console.log(combine);

/**************************************************************************/


// !function() {
//     console.log('Code runs!')
//   }();



// (()=> {
//     console.log('Shit this works!') 
// })()

const {person, sayHi}= require('./try')

sayHi(person.name)

console.log(person)