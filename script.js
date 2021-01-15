'use strict';

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) {
    // создадим тег скрипт в js 
    const script = document.createElement('script');
    // путь элемента script 
    script.src = src;
    // меняем порядок загрузки с помощью свойства async 
    script.async = false;
    // помещаем элемент script на страницу будет загружаться после того как будет добавлен к документу
    document.body.append(script);
}
// будут выполняться строго друг за другом  script.async = false; 
loadScript('test.js');
loadScript('some.js');