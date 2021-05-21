function addClasses(elem, classes) {
  classes.split(' ').forEach((clas) => elem.classList.add(clas));
}

function appendChildren(node, ...children) {
  children.forEach((child) => node.appendChild(child));
}

const home = document.createElement('div');
const headingOne = document.createElement('h1');
const paragraph = document.createElement('p');
const headingTwo = document.createElement('h2');
const horaryContainer = document.createElement('div');
const location = document.createElement('div');

addClasses(paragraph, 'mt-4 text-opacity-100');
addClasses(headingOne, 'text-3xl gray-500 font-bold opacity-100');
addClasses(headingTwo, 'text-2xl mt-4 font-bold');
addClasses(home, 'mx-auto w-1/2 bg-white opacity-80 px-5 py-3 text-center');
addClasses(horaryContainer, 'mt-4 flex justify-center');
location.classList.add('mt-4');

paragraph.textContent = "At Gary's Bistro, our mission is simple: enhance and educate the palate with the freshest ingredients and flavors, while surprising and exciting each guest with personal care and service";
headingOne.textContent = "Gary's Bistro";
headingTwo.textContent = 'Hours:';
horaryContainer.insertAdjacentHTML('beforeend',
  `<ul>
    <li>Sunday: 8am - 8pm</li>
    <li>Monday: 9am - 9pm</li>
    <li>Tuesday: 9am - 9pm</li>
    <li>Wednesday: 9am - 9pm</li>
    <li>Thursday: 9am - 9pm</li>
    <li>Friday: 9am - 9pm</li>
    <li>Saturday: 9am - 9pm</li>
  </ul>`);

location.insertAdjacentHTML('beforeend',
  `<h2 class="mb-4 font-bold text-2xl">Location:</h2>
  <p>location: Saint Martin street number 2134</p>
`);

appendChildren(home, headingOne, paragraph, headingTwo, horaryContainer, location);
export { home, appendChildren, addClasses };