    let newDiv;
function clicked() {
    newDiv = document.createElement('div')
    const newContent = document.createTextNode("hello")
    newDiv.classList.add('div_class')
    newDiv.appendChild(newContent)
    document.body.appendChild(newDiv)

}
function reset() {

    newDiv.parentNode.removeChild(newDiv)

}








// const divSelected = document.querySelector('#one')

// divSelected.addEventListener('click', clicked())
// function clicked() {
//     const newDiv = document.createElement('div')
//     newDiv.classList.add('div_class')

//     document.body.appendChild(newDiv)
// }
