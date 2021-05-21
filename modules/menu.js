import { appendChildren, addClasses } from './home';

const menuContainer = document.createElement('div');
const headingOneMenu = document.createElement('h1');
const dish = document.createElement('div');
const dish2 = document.createElement('div');
const dish3 = document.createElement('div');
const dish4 = document.createElement('div');

addClasses(headingOneMenu, 'text-3xl gray-500 font-bold opacity-100');
addClasses(menuContainer, 'mx-auto w-1/2 bg-white opacity-90 px-5 py-3 text-center')
addClasses(dish, 'mt-4 grid grid-cols-2');
addClasses(dish2, 'mt-4 grid grid-cols-2 mt-2');
addClasses(dish3, 'mt-4 grid grid-cols-2 mt-2');
addClasses(dish4, 'mt-4 grid grid-cols-2 mt-2');

dish.insertAdjacentHTML('beforeend', `
  <div class="rounded-sm h-32 self-center bg-gray-200">
  <h3 class="text-red-400 text-2xl font-bold-font-thin">Lasagna</h3>
  <img src="../assets/images/lasagna.jpg" class="h-full w-full" alt="">
  </div>
  <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur aspernatur aut omnis nemo. Laboriosam rem beatae nulla enim saepe, vel modi amet?</p>
  `);

dish2.insertAdjacentHTML('beforeend', `
  <div class="rounded-sm h-32 self-center bg-gray-200">
  <h3 class="text-red-400 text-2xl font-bold-font-thin">Hamburger</h3>
  <img src="../assets/images/hamburger-hot.jpg" class="h-full w-full" alt="">
  </div>
  <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur aspernatur aut omnis nemo. Laboriosam rem beatae nulla enim saepe, vel modi amet?</p>
  `);

dish3.insertAdjacentHTML('beforeend', `

  <div class="rounded-sm h-32 self-center  bg-gray-200">
  <h3 class="text-red-400 text-2xl font-bold-font-thin">Pizza</h3>
  <img src="../assets/images/pizza.jpg" class="h-full w-full" alt="">
  </div>
  <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur aspernatur aut omnis nemo. Laboriosam rem beatae nulla enim saepe, vel modi amet?</p>
  `);

dish4.insertAdjacentHTML('beforeend', `
  <div class="rounded-sm h-32 self-center bg-gray-200">
  <h3 class="text-red-400 text-2xl font-bold-font-thin">Pank magna</h3>
  <img src="../assets/images/asian.jpg" class="h-full w-full" alt="">
  </div>
  <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur aspernatur aut omnis nemo. Laboriosam rem beatae nulla enim saepe, vel modi amet?</p>
  `);

headingOneMenu.textContent = "Gary's menu";

appendChildren(menuContainer, headingOneMenu, dish, dish2, dish3, dish4);
export { menuContainer, dish };

// Photo by William Choquette from Pexels asian dish