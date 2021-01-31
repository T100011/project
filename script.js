// работа с датами
"use strict";
// даты
// const now = new Date(2021, 0, 21, 20);
// милисекунды
// const now = new Date(-99999999999);
// const now = new Date("2021-01-26");

// метод parse тоже самое что и const now = new Date("2021-01-26");
// new.Date.parse("2021-01-26");

// console.log(now.setHours(40));
// console.log(now);

// console.log(now);

// методы гетеры
// 1 получение компонентов даты

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// // нумерация дня недели
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// метод получает разницу между часовым и utc разница в минутах
// console.log(now.getTimezoneOffset());
// console.log(now.getTimezoneOffset() / 60);
// количество милисекунд  с 1970 года
// console.log(now.getTime());

// методы сетеры set

let start = new Date();

for (let i = 0; i < 100000; i++) {
  // ** возводит в степень
  let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
