const countElement = document.querySelector('.count');
const increaseButton = document.querySelector('.btn3');
const decreaseButton = document.querySelector('.btn1');
const resetButton = document.querySelector('.btn2');

let count = 0;

function updateCount() {
    countElement.textContent = count;
}

increaseButton.addEventListener('click', () => {
    count++;
    updateCount();
});

decreaseButton.addEventListener('click', () => {
    count--;
    updateCount();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateCount();
});

updateCount();
