'use strict';
// действия с элементами  на странице
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
// смотрим методы и свойства объекта box с помощью метода .dir 
// console.dir(box);
// обращаемся к объекту style 
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// обращаемся ко 2 кнопке
btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// присваивание несольким элементам при помощи cssText 
box.style.cssText = 'background-color: blue; width: 500px';

// используем циклы для того чтобы задать параметры нескольким элементам 
// перебираем псевдомассив пока не закончатся все элементы hearts 
// for (let i = 0; i < hearts.length; i++) {
//     // для того чтобы постепенно получать  элементы обращаемся к hearts[i] 
//     hearts[i].style.backgroundColor = 'blue';
// }

// используем цикл forEach для того чтобы задать параметры нескольким элементам
// задаем для каждого сердца имя item 
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// создаем элементы при помощи скриптов document.createElement
// создаем тег div внимание он существует только в Javascript 
const div = document.createElement('div');
// создаем текстовые узлы Ноды
// const text = document.createTextNode('Тут был я');
// изменяем элемент div  с помощью css класса свойства property classList
//  метод add() добавляет определенный класс 
div.classList.add('black');

// добавим div в конец body с помощью метода append

// document.body.append(div);
// добавим div в конец wrapper с помощью метода append
// document.querySelector('.wrapper').append(div);
// рефакторинг кода
// wrapper.append(div);

// добавим div в начало wrapper с помощью метода append 
// wrapper.prepend(div);
// устаревший код appendChild
// wrapper.appendChild(div);

// добавим div в начало heart с помощью метода before 
// hearts[0].before(div);

// добавим div в начало heart с помощью метода after 
// hearts[0].after(div);
// insertBefore старый метод 1 div 2 перед каким элементом мы вставляем
// wrapper.insertBefore(div, hearts[0]);

// удалим элементы со страницы c помощью метода remove

// circles[0].remove();

// старый метод удаления
wrapper.removeChild(hearts[1]); 


// заменяем один элемент другим replaceWith() (кружочком заменяем сердце)
// hearts[0].replaceWith(circles[0]);