const area = document.getElementById('area');
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal__result--wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
const btnNewGame = document.getElementById('btn__new-game');
const btnClear = document.getElementById('btn__clear-counter');
const boxes = document.querySelectorAll('.box');
let victories = document.querySelector('.counter__win-crosses');
let defeats = document.querySelector('.counter__win-noughts');
let counterVictories = counterDefeats = 0;
let move = 0;
let result = '';

area.addEventListener('click', event => {
    if (event.target.className == 'box') {
        move % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O';
        move++;
        event.target.innerHTML === 'X' ? event.target.style.color = 'green' : event.target.style.color = 'red';
        check();
    }
});

const emptyBoxes = () => {
    let emptyArr = [];
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML == '') {
            emptyArr.push(i);
        }
    }
    return emptyArr;
};

const check = () => {
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML === 'X' && boxes[arr[i][1]].innerHTML === 'X' && boxes[arr[i][2]].innerHTML === 'X'
        ) {
            boxes[arr[i][0]].style.backgroundColor = boxes[arr[i][1]].style.backgroundColor = boxes[arr[i][2]].style.backgroundColor = '#00000033';
            victories.innerHTML = ++counterVictories;
            result = 'Win the crosses';
            prepareResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML === 'O' && boxes[arr[i][1]].innerHTML === 'O' && boxes[arr[i][2]].innerHTML === 'O'
        ) {
            boxes[arr[i][0]].style.backgroundColor = boxes[arr[i][1]].style.backgroundColor = boxes[arr[i][2]].style.backgroundColor = '#00000033';
            defeats.innerHTML = ++counterDefeats;
            result = 'Win the noughts';
            prepareResult(result);
        } else if (emptyBoxes().length === 0) {
            boxes[arr[i][0]].style.backgroundColor = boxes[arr[i][1]].style.backgroundColor = boxes[arr[i][2]].style.backgroundColor = '#00000033';
            result = 'Draw';
            prepareResult(result);
        }
    }
};

const prepareResult = result => {
    contentWrapper.innerHTML = `${result}!`;
    setTimeout(() => modalResult.style.display = 'block', 1000);
};

const closeModal = () => {
    modalResult.style.display = 'none';
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = '';
        boxes[i].style.background = 'none';
    }
    move = 0;
};

const cleanCounterBtn = () => {
    victories.innerHTML = counterVictories = 0;
    defeats.innerHTML = counterDefeats = 0;
    // location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
btnNewGame.addEventListener('click', closeModal);
btnClear.addEventListener('click', cleanCounterBtn);