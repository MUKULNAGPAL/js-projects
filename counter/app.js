
let increased = document.querySelector('#increase')
let container = document.querySelector('#container')
let decreased = document.querySelector('#decrease')
let reset = document.querySelector('#reset')
let count = 0



increased.addEventListener('click', increment)




decrease.addEventListener('click', decrement)




reset.addEventListener('click', zero)


// make value 0
function zero() {
    count = 0
    container.textContent = count
    if (container.innerHTML > 0) {
        container.style.color = 'green'
    } else if (container.innerHTML < 0) {
        container.style.color = 'red'
    } else {
        container.style.color = 'black'
    }

}



// increase value
function increment() {

    count++;
    container.textContent = count

    if (container.innerHTML > 0) {
        container.style.color = 'green'
    } else if (container.innerHTML < 0) {
        container.style.color = 'red'
    } else {
        container.style.color = 'black'
    }

}



//decrease value
function decrement() {
    count--;
    container.textContent = count


    if (container.innerHTML > 0) {
        container.style.color = 'green'
    } else if (container.innerHTML < 0) {
        container.style.color = 'red'
    } else {
        container.style.color = 'black'
    }

}


