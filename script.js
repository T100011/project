// события на мобильных устройствах (6 cобытий)
// touchstart србатывает при касании на элемент 
// toucmove действует при смещении пальцем 
// touchend действие кода палец оторвался от элемента 
// touchenter действие когда ведем элемень пальцем и он наскальзывает на событие другой элемент
// touchleave когда палец продолжил скользить и ушел за пределы элемента 
// touchcancel точка соприкосновения больше не регистрируется на поверхности 

// вешаем обработчик события 
window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        console.log('Start');
        console.log(event.touches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        
        // console.log('Move');
        console.log(event.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();
        
        console.log('End');
    });
});
cвойство
// touches выдает список всех пальцев которые сейчас взимодействуют с экраном 
// targetToughes 
// changedTouches список пальцев которые участвуют в текущем событии 



