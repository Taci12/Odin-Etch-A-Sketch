let color = 'black';

function createSquares(dimension) {
    let board = document.querySelector('.drawing-board');
    board.style.gridTemplate = `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`;
    totalSquares = dimension * dimension;
    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = `${color}`;
        board.appendChild(square);
    };
};

let size = document.querySelector('.input').value;
console.log(value);

function changeSize(size) {
    createSquares(size);
};

let setSizeButton = document.querySelector('.set-size-button');
setSizeButton.addEventListener('click', changeSize(size));