// console.log(document.body);
// console.log(document.documentElement);

// позволяет найти все ноды узлы в родителе 
// console.log(document.body.childNodes);

// получение первого и последнего ребенка родителя 
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// перемещаемся выше по к родителю от селектора с помощью parentNode
// console.log(document.querySelector('#current').parentNode.parentNode);
// clg - console.log(object); 
// дата атрибут 
// .nextSibling свойство возвращает следующую ноду
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// previousSibling свойство возвращает предыдущую ноду 
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// получаем следующий элемент 
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// console.log(document.querySelector('#current').parentNode.);
// аналог кода выше  получаем родителя элемента
// console.log(document.querySelector('#current').parentElement);

// переберем все чаилднодс и избавимся от текстовых нод 
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}