// 1 способ кликаем по кнопке пишем в самом html onclick="alert('Click')" не используется в современной верстке
// 2 способ кликаем по кнопке в реальных проектах не используется
const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

// 3 способ наиболее правильный addEventListener() добавляем обработчик события 1 аргумент назавание события click 2 аргумент callback функция)
// callback функции выполняются строго за другими (можем создавать 
// несколько действий на одно событие) 

// btn.addEventListener('click',  () => {
//     alert('Click');
// });

// btn.addEventListener('click',  () => {
//     alert('Second click');
// });
// делаем другое действие mouseente

// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', (e) => {
//     // смотрим на объект event 
//     // console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');
// });

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    // добавив {once: true} мы можем нажать кнопку только один раз 
    btn.addEventListener('click', deleteElement, {once: true});
}); 

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    // отменяем стандартное поведение 
    event.preventDefault();

    console.log(event.target);
});

