'use strict';
// Массивы и псевдомассивы т.е.структура которая содержит элементы по порядку

const arr = [2, 13, 26, 8, 10];
// осортировка чисел идет как строки т.к используется алгоритм быстрой сортировки
arr.sort(compareNum);

// arr[99] = 0;
// console.log(arr.length);
console.log(arr);
// функция сравнения чисел 
function compareNum(a, b) {
    return a - b;
}

// метод array.forEach с колбек функцией применяется к каждому элементу массива
// item сам элемент, i номер по порядку, arr ссылка на массив который перебираем 
// arr.forEach(function(item, i, arr ) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });


// метод pop удаляет элемент из конца массива

// arr.pop();

// метод push добавляет элемент в конец массива 

// arr.push(10);

// console.log(arr);

// перебираем массив через цикл for 

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// перебираем массив через цикл for of

// for (let value of arr) {
//     console.log(value);
// }

// // метод split(s) превращает строку в массив s разделитель 
// const str = prompt('','');
// const products = str.split(', ');
// // метод sort(s) метод сортировки по алфавиту или цифрам как строки
// products.sort();
// // метод join(s) превращает строку в массив s разделитель 
// console.log(products.join('; '));

// псевдомассивы в отличии от обычных массивов не используют методы   

