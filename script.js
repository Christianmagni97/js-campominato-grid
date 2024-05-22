const baseCellsJs = document.querySelector('section#base-cells');


for (let index = 0; index < 100; index++) {
    const createCells = document.createElement('article');
    createCells.classList.add('cells');
    baseCellsJs.appendChild(createCells);
    
}