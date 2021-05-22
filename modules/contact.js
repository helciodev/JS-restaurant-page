import { appendChildren, addClasses } from './home';

const contactContainer = document.createElement('div');
const headingOneContact = document.createElement('h1');

addClasses(headingOneContact, 'text-3xl gray-500 font-bold opacity-100');
addClasses(contactContainer, 'mx-auto w-1/2 bg-white opacity-90 px-5 py-3 text-center');

headingOneContact.textContent = '222-333-444';
appendChildren(contactContainer, headingOneContact);

const contact = () => contactContainer;

export default contact;