window.addEventListener('DOMContentLoaded', () => {
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
});
