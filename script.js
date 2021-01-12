// console.log(document.body);
// console.log(document.documentElement);

// позволяет найти все ноды узлы в родителе 
console.log(document.body.childNodes);

// получение первого и последнего ребенка родителя 
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// перемещаемся выше по к родителю от селектора с помощью parentNode
console.log(document.querySelector('#current').parentNode.parentNode);

