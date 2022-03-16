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
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const promoAdv = document.querySelector('.promo__adv');
const promoIMG = promoAdv.querySelectorAll('img');

function deletePromo() {
    promoIMG.forEach(el => {
        el.remove();
    });
};

deletePromo()

