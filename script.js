let color = 'black';

function createSquares(dimension) {
    let board = document.querySelector('.drawing-board');
    board.style.gridTemplate = `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`;
    totalSquares = dimension * dimension;
    let squares = document.querySelectorAll('.squares');
    squares.forEach((square) => {
        square.classList.remove();
    });
    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        });
        board.appendChild(square);
    };
};

function changeSize() {
    let size = window.prompt('Input size: ');
    while ((size > 100) || (size < 10)) {
        window.alert('The size must be between 10 and 100!');
        size = window.prompt('Input size: ');
    }
    createSquares(size);
};

function changeColor(newColor) {
    if (!(newColor == 'random')) {
        color = newColor;
    } else {
        color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
}

function resetSquares() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((element) => {
        element.style.backgroundColor = 'white';
    });
};

