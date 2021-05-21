import { home } from '../modules/home.js';
import { menuContainer, dish } from '../modules/menu.js';
import { iamContact } from '../modules/contact.js';

const content = document.getElementById('content');

content.insertAdjacentHTML('beforeend', 
`<nav class="bg-black pt-5 pb-4 mb-10">
      <ul class="flex justify-center">
        <li class="mr-10"><a href="#" id="home"  class="text-gray-100 capitalize text-2xl  pb-2 hover:text-red-500">home</a></li>
        <li class="mr-10"><a href="#" id="menu" class="text-gray-100 capitalize text-2xl hover:text-red-500">menu</a></li>
        <li><a href="#" id="contact" class="text-gray-100 capitalize text-2xl  hover:text-red-500">contact</a></li>
      </ul>
    </nav>`);

    content.appendChild(home) ;