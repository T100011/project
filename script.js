'use strict';
// Объекты и деструктризация объектов ES 6

// создаем новый объект через new Object()
const = new Object();


// создаем новый объект через {}
const options = {
    name: 'test',
    // ключ (свойство name): значение (test),
    width: 1024,
    height: 1024,
    // записываем color: {}, тоже объект 
    colors: {
        border: 'black',
        bg: 'red'
    },
    // делаем собственный метод подсчитывающий кол-во ключей 
    makeTest: function() {
        console.log("Test");
    }
};
// запускаем метод maketest ()-что то идет в работу функция или метод
options.makeTest();

// делаем деструктуризацию объекта   вскобки записываем те переменные которые мы хоти вытащить
const {border, bg} = options.colors;
console.log(border);

// выводим ключи из объекта при помощи метода Object.keys()
// console.log(Object.keys(options));
// при помощи свойства length подсчитываем количество ключей 
// console.log(Object.keys(options).length);

// получаем доступ к свойству объекта при помощи () . или [''] 
// console.log(options.name);
// console.log(options['colors']['border']);
// console.log(options);
// удалим свойство из объекта с помощью delete 
// delete options.name;

// console.log(options);

// как перебрать свойства объекта при помощи for (каждое свойство let кеу in) 
// делаем счетчик с помощью переменной counter 
// let counter = 0;
// for (let key in options) {
//     // [object Object] пытаемся добраться с помощью if 
//     if (typeof(options[key]) === 'object') {
//         for(let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]} `);
//             // добираемся до объекта внутри объекта options[key][i]
//             // counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]} `);
//         // options[key] значение ключа
//         counter++;
//     }
// }
// console.log(counter);

// Объекты Javascript в примерах 
// https://javascript.ru/tutorial/object/intro Объекты Javascript в примерах 

// создание объекта 2 способа

var 0 = new Object();
var o = {};

// добавление свойств в объект 2 способа 
o.test = 5;
o['test'] = 5;

// доступ к свойству осуществляется следующим способом 
alert(o.test)
alert(o['test'])

// если у объекта нет свойства например нет св-ва test то результат будет undefined

// удаление свойств при помощи оператора delete 
o.test = 5;
delete o.test;

// расширенное создание объекта при помощи списка { ..., ключ: значение, ...} 
var o = {
    test: 5;
    bla: true
}

// добавление метода в объект o.run = function (n) {} 
// создаем объект rabbit 
var rabbit = {};
// добавляем метод run в объект 
rabbit.run = function(n) {
    console.log(`Пробежал ${n} метров`);
}
rabbit.run(10);
rabbit.run(5);
