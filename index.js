// first javascript code
let name = 'Zee';
console.log(name);
console.log('Hello World');

let age = 30;
let isApproved = false;
let fname = undefined;
let selectedColor = null;
//alert('hello')

// object literal
let person = {
    name: 'Zee',
    age: 30
};

console.log(person);
person.name = 'Zahida'
console.log(person.name);

person['name'] = 'Zeeeee'
console.log(person.name);

//Array literal

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0])

selectedColors[2] = 'green'
console.log(selectedColors);

console.log(selectedColors.length);

//functions
//this performs a task

function greet(name, lname) {
    console.log('Hello ' + name + ' ' + lname + ' from function!');
}

greet('Zahida');
greet('Zee', 'Meeran')

// function with return
// function to calculate a value
function square(num) {
    return num * num;
}
console.log(square(20));