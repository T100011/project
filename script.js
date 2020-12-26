"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num);

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function calc(a, b) {
//     return (a + b);
//     console.log('dwed');
// }



function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

let val = 7;
function createAdder() {
    function addNumbers(a, b) {
        let ret = a + b;
        return ret;
    }
    return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function', sum);

// замыкания
function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

let c = 4;
const addX = x => n => n + x;
const addThree = addX (3);
let d = addThree(c);
console.log('exzmple partial application', d);

let c = 4;
function addX(x) {
    return function(n) {
        return n + x;
    };
}
const addThree = addX (3);
let d = addThree(c);
console.log('exzmple partial application', d);

// замыкания изнутри
let name = 'John';
function sayHi() {
    console.log('Hi, ' + name);
}
name = 'Pete';
sayHi();

function makeWorker() {
    let name ='Pete';
    return function() {
        console.log(name);
    };
}
let name = 'John';
let work = makeWorker();
work();

function sayHiBye(firstName, lastName) {
    function getFullname() {
        return firstName + " " + lastName;
    }
    console.log('Hello, ' + getFullname());
    console.log('Bye, ' + getFullname());
}

function User(name) {
    this.sayHi = function() {
        console.log(name);
    };
}
let user = new User('John');
user.sayHi();

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());

