const background = document.querySelector('body');
const colorBtn = document.querySelector('.change-btn');

colorBtn.addEventListener('click', changeColor) 

function changeColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    background.style.backgroundColor = randomColor;
}





