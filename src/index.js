import { home } from '../modules/home';
import { menuContainer } from '../modules/menu';
import { contactContainer } from '../modules/contact';

const content = document.getElementById('content');

content.insertAdjacentHTML('beforeend',
  `<nav class="bg-black pt-5 pb-4 mb-10">
        <ul class="flex justify-center">
          <li class="mr-10"><a href="#" id="home"  class="text-gray-100 capitalize text-2xl  pb-2 hover:text-red-500">home</a></li>
          <li class="mr-10"><a href="#" id="menu" class="text-gray-100 capitalize text-2xl hover:text-red-500">menu</a></li>
          <li><a href="#" id="contact" class="text-gray-100 capitalize text-2xl  hover:text-red-500">contact</a></li>
        </ul>
  </nav>`);

content.appendChild(home);
console.log(content);

window.addEventListener('click', (e) => {
  if (e.target.id === 'home') {
    content.removeChild(content.lastChild);
    content.appendChild(home);
  } else if (e.target.id === 'menu') {
    content.removeChild(content.lastChild);
    content.appendChild(menuContainer)
  }else if(e.target.id === 'contact'){
    content.removeChild(content.lastChild);
    content.appendChild(contactContainer)
  }
});