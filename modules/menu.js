import {appendChildren, addClasses} from './home';
import Lasagna from '../assets/images/lasagna.jpg';

const menuContainer = document.createElement('div');
const headingOneMenu = document.createElement('h1');
const dish = document.createElement('div');
const dish2 = document.createElement('div');

addClasses(headingOneMenu, 'text-3xl gray-500 font-bold opacity-100')
addClasses(menuContainer, 'mx-auto w-1/2 bg-white opacity-80 px-5 py-3 text-center')
[dish, dish2].forEach(dish => addClasses(dish, 'mt-4 grid grid-cols-2'))