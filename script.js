'use strict';
// Основы ООП, прототипно-ориентированное наследование 

let str = 'some';
let strObj = new String(str);
// метод превращает строку в объект 

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

// soldier -это прототип 
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }    
};

// мы создаем новый объект john, который будет прототипно наследоваться от john 
const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; доступ к свойствам прототипа старый способ
// john.__proto__ = soldier;

// новый способ доступа к прототипам 
// (1-объект которому назначается прототип, 2-сам прототип)
// сначала создавался john, а потом soldier  
// Object.setPrototypeOf(john, soldier);



// console.log(john.armor);
john.sayHello();