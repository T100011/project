'use strict';
// получение элементов со страницы c помощью метода getElementById()
const box = document.getElementById('box');

console.log(box);

// const btns = document.getElementsByTagName('button'); 

// получили не один элемент, а псевдомассив элементо (псевдомассив это массив без методов )
// для того чтобы получить конкретную кнопку используем [] 
// const btns = document.getElementsByTagName('button')[1];
// console.log(btns);

// второй способ 

const btns = document.getElementsByTagName('button');
console.log(btns[1]);

// используем классы 

const circles = document.getElementsByClassName('circle');
console.log(circles);

// новые методы querySelectorAll(); помещаем любой css селектор появл метод for each

const hearts = document.querySelectorAll('.heart');
// console.log(hearts[1]);
hearts.forEach(item => {
    console.log(item);
});
// item это каждый элемент который будет находится в псевдомассиве hearts 

// другой метод, который получает первый селектор document.querySelector();

const oneHeart = document.querySelector('.heart');

console.log(oneHeart);