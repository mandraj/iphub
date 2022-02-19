import './modules/slider';
import modal from './modules/modals';
import menu from './modules/menu';
import tabs from './modules/tabs';
import select from './modules/select'
import accordion from './modules/accordion';


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modal();    
    menu('.hamburger', '.menu__close', '.menu-overlay', 'menu-overlay_active');
    accordion();
    tabs('.content__tabs', '.content__tabs-item', '.content__items', 'content__tabs-item_active');
    select('.content__select', '.content__items');
    accordion();
})