import {appendChildren, addClasses} from './home';
import Lasagna from '../assets/images/lasagna.jpg';

const menuContainer = document.createElement('div');
const headingOneMenu = document.createElement('h1');
const dish = document.createElement('div');
const dish2 = document.createElement('div');

addClasses(headingOneMenu, 'text-3xl gray-500 font-bold opacity-100')
addClasses(menuContainer, 'mx-auto w-1/2 bg-white opacity-80 px-5 py-3 text-center')
[dish, dish2].forEach(dish => addClasses(dish, 'mt-4 grid grid-cols-2'))

dish.insertAdjacentHTML('beforeend' `
<div class="rounded-sm bg-blue-700">
<img src="${Lasagna}" class="h-auto w-full" alt="">
</div>
<p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur aspernatur aut omnis nemo. Laboriosam rem beatae nulla enim saepe, vel modi amet?</p>
`)

headingOneMenu.textContent = "Gary's menu";

appendChildren(menuContainer, headingOneMenu, dish)
export{ menuContainer, dish }