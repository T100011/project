/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// 1 задание
// убираем все картинки (рекламные блоки) 
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

// удаляем каждый элемент через foreach 
adv.forEach(item => {
    item.remove();
});
// обычная функция 
// adv.forEach(function (item){
//     item.remove();
// });

// 2 задание 
genre.textContent = 'драма';

// 3 задание 
poster.style.backgroundImage = 'url("img/bg.jpg")';

// 4 задание 
// очищаем лист с помощью innerhtml 
movieList.innerHTML = "";
// сортируем фильмы по алфавиту 
movieDB.movies.sort();

console.log(poster.innerHTML);
// перебираем данные массива 
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

// a = a + 1;
// a += 1;