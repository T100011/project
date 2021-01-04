'use strict';
// Передача данных по ссылке и по значению


// let a = 5,
//     b = a;

//  b = b + 5;

//  console.log(b);
//  console.log(a);

//  const obj = {
//      a: 5,
//      b: 1
//  };

//  const copy = obj;

//  ссылка copy.a = 10; на объект выше const obj = {}; передача по ссылке
//  copy.a = 10;

//  console.log(copy);
//  console.log(obj);

//  делаем копию с помощью цикла 1 способ
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// делаем копию с помощью метода 2 способ

const add = {
    d: 17,
    e: 20
};

// соединяем объект numbers с объектом add (Object.assign-метод(numbers-объект в
// который помещаем , add-объект который помещают)) 

// console.log(Object.assign(numbers, add));

// таким образом мы сделали независимую вложенную копию объекта независящую от numbers и add 

// делаем копию объекта при помощи {} 
const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

// создаем копию массива 

const oldArray = ['a', 'b', 'c'];


// const newArray = oldArray; ссылка на массив 
// метод slice() позволяет просто скопировать старый массив 
const newArray = oldArray.slice();

// в newArray меняем значение второго элемента 
newArray[1] = 'dsfsdfsdf';
console.log(newArray);
console.log(oldArray);

// 4 способ создания поверхностой копии ES-6 (появился для массивом) ES 8 (для объектов)
// оператор spread оператор разворота

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress','Livejournal', 'blogger'],
    //   internet= [];
// сделаем в переменной internet совмещение данных из video, blogs ид другие данные ;
    internet= [...video, ...blogs, 'vk', 'facebook'];    

console.log(internet);

// другой пример посложнее 
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// 4 способ для объектов 

const array = ['a', 'b'];

const newAarray  = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};