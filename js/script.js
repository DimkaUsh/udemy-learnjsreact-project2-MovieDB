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

const promoAdv = document.querySelector('.promo__adv'),
      promoBg = document.querySelector('.promo__bg'),
      promoIMG = promoAdv.querySelectorAll('img'),
      newGenre = 'ДРАМА',
      promoInteractiveList = document.querySelector('.promo__interactive-list');
let promoInteractiveItems = document.querySelectorAll('.promo__interactive-item'),
    deleteButtons = document.querySelectorAll('.delete');

function deletePromo() {
    promoIMG.forEach(el => {
        el.remove();
    });
};

function changeGenres(genre) {
    const promoGenres = document.querySelector('.promo__genre');
    promoGenres.textContent = genre;
};

function addIndex () {

    for (let i = 0 ; i < movieDB.movies.length ; i++) {
        movieDB.movies[i] = `${i+1}. ${movieDB.movies[i]}`;
    };
};

function isNumber(value)  {
    if (typeof(+value) != NaN) {return true};
    return false
}

function deleteContent() {
    
    promoInteractiveItems.forEach(el => {
        el.remove()
    });
};

function deleteIndex() {

    movieDB.movies.forEach((el, index) => {
        let count = 2
        for (let i = 0; i < el.length; i++){
            if (el[i] === "."){break}
            if (isNumber(el[i])) {  
                count++
            }
        }

        movieDB.movies[index] = movieDB.movies[index].slice(count);
   });
};

function deleteContent() {
    
    promoInteractiveItems.forEach(el => {
        el.remove()
    });
};

function addContent() {

    movieDB.movies.forEach(el => {
        promoInteractiveList.innerHTML +=
        `<li class="promo__interactive-item">${el}
        <div class="delete"></div>
        </li>`
    });

    promoInteractiveItems = document.querySelectorAll('.promo__interactive-item');
};

function addElemToList() {

    movieDB.movies.sort()
    addIndex ()
    deleteContent()
    addContent()

    deleteButtons = document.querySelectorAll('.delete');

    for (let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteItem);
    };
};

function start () {
    deletePromo();
    changeGenres(newGenre);
    promoBg.style.backgroundImage = 'url(img/bg.jpg)';
    addElemToList()
};

start()

const addingInput = document.querySelector('.adding__input'),
    button = document.querySelector('button');


function addelem (e) {
    e.preventDefault();

    deleteIndex()
    let value = addingInput.value;
    if (value.length > 21) {
        value = `${value.slice(0, 21)}...`
    }
    movieDB.movies.push(value);
    addElemToList()

}

button.addEventListener('click', addelem);

function deleteItem(e) {

    let text = e.target.previousSibling.textContent.trimEnd();

    movieDB.movies.forEach((el, index) => {
        if (el===text){movieDB.movies.splice(index, 1)}
    });

    e.target.parentNode.remove();

    deleteIndex()
    addElemToList()

};

for (let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteItem);
};

// Добавлен любимый фильм

const checkbox = document.querySelector('[type=checkbox]');

function hasLike() {
    if (checkbox){console.log("Добавляем любимый фильм")};

};

button.addEventListener('click', hasLike);
