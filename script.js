let color = 'white';

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


function changeSize() {
    let size = window.prompt('Input size: ');
    while ((size > 100) || (size < 10)) {
        window.alert('The size must be between 10 and 100!');
        size = window.prompt('Input size: ');
    }
    createSquares(size);
};

let sizeButton = document.querySelector('.set-size-button');
sizeButton.addEventListener('click', changeSize)
