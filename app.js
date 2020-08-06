const title = document.getElementsByTagName('h1')[0];
const input = document.getElementById('name');
const form = document.getElementsByTagName('form')[0];
const container = document.querySelector('.container');


const hexArr = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];




function hexGenerator() {
    let hexRandom = '';
    for (let i = 0; i < 6; i++) {
        hexRandom += hexArr[Math.floor(Math.random() * hexArr.length)];
    }
    return hexRandom;

}

/* 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titlevalue = input.value;
    title.textContent = titlevalue;

    let hexPrevious = hexGenerator();

    title.style.color = `#${hexGenerator()}`;
    container.style.backgroundColor = `#${hexGenerator()}`;
    input.value = '';
})

 */

form.addEventListener('input', (e) => {
    let inputValue = input.value;
    title.textContent = inputValue;



    title.style.color = `#${hexGenerator()}`;
    container.style.backgroundColor = `#${hexGenerator()}`;

})


window.addEventListener('click', (e) => {
    if (e.target.classList.contains('container')) {
        form.classList.toggle('invisible')
    }


})



setInterval(() => {
    input.style.boxShadow = `0 0 10px 3px #${hexGenerator()}`;

}, 1000);