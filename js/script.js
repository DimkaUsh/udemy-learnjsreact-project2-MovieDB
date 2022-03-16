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

deletePromo();

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

const newGenre = 'ДРАМА';

function changeGenres(genre) {
    const promoGenres = document.querySelector('.promo__genre');
    promoGenres.textContent = genre;
};

changeGenres(newGenre);

/* 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS */

const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = 'url(../img/bg.jpg)';

/* 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту  */

let promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');

movieDB.movies.sort();

// 5) Добавить нумерацию выведенных фильмов

for (let i = 0 ; i < movieDB.movies.length ; i++) {
    movieDB.movies[i] = `${i+1}. ${movieDB.movies[i]}`;
};

promoInteractiveItem.forEach((element, index) => {
    element.textContent = movieDB.movies[index];
});


