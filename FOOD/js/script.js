// создаем обработчик события 
window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    // создаем функцию для скрытия табов
    function hideTabContent() {
        // перебираем псевдомассив через forEach() 
        tabsContent.forEach(item => {
            item.classList.add('hide');
            // удаляем класс show 
            item.classList.remove('show', 'fade');   
        });

        tabs.forEach(item => {
            // tabheader__item_active точку не ставим т.к. class List об этом сам говорит 
            item.classList.remove('tabheader__item_active');
        });
    }
    // функция увидеть контент 
    // i = 0 es6 удобная фишка
    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    // объявляем функции 
    hideTabContent();
    showTabContent();

    // делегирование событий создаем обработчик событий
    tabsParent.addEventListener('click', (event) => {
        // переопределяем eventarget в определенную переменную 
        const target =event.target;
        
        if (target && target.classList.contains('tabheader__item')) {
            // item-каждый таб который мы перебираем, i номер элемента по порядку  
            tabs.forEach((item, i) => {
                // если target-тот элемент в который мы только что кликнули 
                // совпадает с item т.е. с элементом который мы перебираем
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                    // i это номер элемента который совпал 
                }
            });
        }
    }); 
});