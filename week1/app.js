//console.log('first statement')
//console.log('second statement')

// setTimeout(()=> {
//     console.log('second statement')
// }, 5000)

// console.log('third statement')

// let i = 5000

// const f = () => {
//     let j = 6000
//     console.log(j)
// }

// f()
// console.log(i)

// const obj = {
//     name: "Prosper",
//     profession: "web dev"
// }

// class People {
//     constructor(name, profession, age){
//             this.name = name
//             this.profession = profession
//             this.age = age
            

//     }
// }

// const person = new People('John Doe', 'Developer', 50)
// const person1 = new People('Amara', 'Backend Dev', 40)

// const animals = ['dog' , 'cat', 'bird']
// const ani = animals.join(',')

//let text = animals.toString()

//animals.unshift(`snake`)
//animals.toString()


// console.log(ani)

// const newArray = ani.split(',')
// console.log(newArray)


//Function Delaration
// sayHi('Benson')
// function sayHi (name){
//     console.log(`Hi ${name}`)
// }


// sayHi('Johnson')

//Function Expression

//Anonymous function
// (()=> {
//     console.log('Hello Node')
// })() Immediately invoked function expression

// !function() {
//     console.log('Hi nodejs!')
//   }();

// (() => {
//     console.log('Hey nodejs!')
// })()


//NODE GLOBAL VARIABLES

const direct = __dirname 
const fileName = __filename

console.log(direct)
console.log(fileName)