document.addEventListener('DOMContentLoaded', () => {
  const mazeTable = document.getElementById('maze');
  const mazeBody = mazeTable.querySelector('tbody');
  
  const numRows = 35;
  const numCols = 75;

  for (let row = 0; row < numRows; row++) {
    const newRow = document.createElement('tr');
    for (let col = 0; col < numCols; col++) {
      const newCell = document.createElement('td');
      newRow.appendChild(newCell);
    }
    mazeBody.appendChild(newRow);
  }
  const targetCell = mazeTable.rows[2].cells[2];
  targetCell.style.backgroundColor = '#ff79c6'; //colouring one cell

  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.addEventListener('click', clearBoard);

  function clearBoard() {
    const cells = mazeTable.querySelectorAll('td');
    cells.forEach((cell) => {
      cell.style.backgroundColor = 'black';
    });
  }
});