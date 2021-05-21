function addClasses(elem, classes) {
  classes.split(' ').forEach(clas => elem.classList.add(clas))
}

function appendChildren(node,...children) {
  children.forEach( function(child){
    node.appendChild(child)
  })
}
