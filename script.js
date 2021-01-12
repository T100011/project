// 1 способ кликаем по кнопке пишем в самом html onclick="alert('Click')" не используется в современной верстке
// 2 способ кликаем по кнопке в реальных проектах не используется
const btn = document.querySelector('button');

btn.onclick = function() {
    alert('Click');
};