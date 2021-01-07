'use strict';
// динамическая типизация в js 

// To String

// 1) String()

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) конкатенация (что-то складывают со строкой) при сложении со строкой все равно 
// получается строка

console.log(typeof(5 + ''));

// пример 

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

// 1) Number()

console.log(typeof(Number('4')));

// 2) унарный плюс знак плюса ставят перед +b 

console.log(typeof(+'5'));

// 3) parseInt

console.log(typeof(parseInt('15px', 10)));

// на практике используют унарный плюс 

let answ = +prompt('Hello', "");

// To boolean пустота всегда будет ложью

// 0, '', null, undefined, NaN; это будет всегда false
// 1) 1 способ нативный логических преобразований 
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2) способ логических преобразований Bolean

console.log(typeof(Boolean('4')));

// 3) 3 способ логических преобразований !!

console.log(typeof(!!'44444'));
