'use strict';
const btns = document.querySelectorAll('button'),
      wrapper =document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// метод item() показывает какие есть классы под номерами
// console.log(btns[0].classList.item(1));
// метод add() добавляет определенные классы 
console.log(btns[1].classList.add('red'));
// метод remove() удаляет определенные классы 
// console.log(btns[0].classList.remove('blue'));
// метод toggle() удаляет класс если он есть на элементе
// или добавляет класс если его нет на элементе 
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    // используем toggle 
    btns[1].classList.toggle('red');
});

// устарело 
// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    // if (event.target && event.target.tagName == 'BUTTON')
    // какой-то элемент совпадает с чем-то matches 
    if (event.target && event.target.matches('button.red'))
     {
        console.log('Hello');
    }
});

// при помощи перебора 
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
