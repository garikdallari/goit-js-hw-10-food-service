import menu from '../menu.json';
import menuCardTpl from '../templates/menu-card.hbs'

const menuContainer = document.querySelector('.js-menu');

const menuMarkUp = makeCardMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkUp);

function makeCardMarkup(menu) {
    return menuCardTpl(menu)
};
