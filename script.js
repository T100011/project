// скрипты время их выполнения setTimeout setInterval
// const timerID = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');

// 2 dвариант функция логгер
// const timerID = setTimeout(logger, 2000);

// отмена действий таймера 
// clearInterval(timerID);

// function logger () {
//     console.log('text');
// }
// работает и без переменной 
// setTimeout(logger, 2000);

// кликаем по кнопке отмена действий

const btn = document.querySelector('.btn');
let timerID,
    i = 0;

// делаем перемещение  квадрата

function myAnimation() {
    // переменная для квадрата который будет перемещаться 
    const elem = document.querySelector('.box');
    // позиция которая будет изменяться 
    let pos = 0;

    // функция которая будет запускаться через определенный  промежуток времени 
    
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}


btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerID = setTimeout(logger, 2000);
//     // timerID = setInterval(logger, 500);

// });


// function logger () {
//     if (i === 3) {
//         clearInterval(timerID);
//     }
//     console.log('text');
//     i++;
// }

// рекурсия это функция которая сама себя внутри вызывает 
// рекурсивный вызов сеттаймаут 
// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);