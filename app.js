// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const nums2 = nums.map((num) => {
  return num * 2
})

console.log(nums2)

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

// Your code here
const [firstElement, secondElement] = pizzaToppings

console.log(firstElement)
console.log(secondElement)

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5'
}

// Your code here

const { make, model } = car

console.log(make)
console.log(model)

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// Your code here

const controversialPizzaToppings = [...pizzaToppings]

console.log(controversialPizzaToppings)

// Duplicate the following object and spread its values into a new variable `myCar`.

const mycar = { ...car }
// Change the `model` property of `myCar` to 'q7'. Log both objects.
mycar.model = 'q7'
// Your code here
console.log(mycar)

// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
const propertyName = 'userName'
const userProfile = {
  [propertyName]: 'Muhannad'
}

// Your code here
console.log(userProfile)

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const cat = (firstWord = 'cat', secondWord = 'white') => {
  return `the ${firstWord} is ${secondWord}`
}

console.log(cat())

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty'
/*
if (pizza === 'tasty') {
  console.log('yum')
} else {
  console.log('yuck')
}*/

// Your code here
let taste = (pizza = 'tasty' ? 'yum' : 'yuck')

console.log(taste)

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
let LANG = localLangConfig || 'en'
// Log the result
console.log('Language setting:', LANG)

// 2. SET WEBSITE THEME

const userSavedTheme = null // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
let USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('User theme setting:', USER_THEME)

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice'
}

let Cat = adventurer.cat?.age // Your code here

console.log(Cat)
