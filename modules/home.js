function addClasses(elem, classes) {
  classes.split(' ').forEach(clas => elem.classList.add(clas))
}

function appendChildren(node,...children) {
  children.forEach( function(child){
    node.appendChild(child)
  })
}

const home = document.createElement('div');
const headingOne = document.createElement('h1');
const paragraph = document.createElement('p');
const headingTwo = document.createElement('h2');
const horaryContainer = document.createElement('div')
const location = document.createElement('div')

addClasses(paragraph, 'mt-4 text-opacity-100')
addClasses(headingOne,'text-3xl gray-500 font-bold opacity-100')
addClasses(headingTwo, 'text-2xl mt-4 font-bold');
addClasses(home,'mx-auto w-1/2 bg-white opacity-80 px-5 py-3 text-center' )
addClasses(horaryContainer,'mt-4 flex justify-center' );
location.classList.add('mt-4');