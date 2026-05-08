const game = document.getElementById("game");
const size = 10;
const minesCount = 10;
let cells = [];

function createBoard() {
  cells = [];
  game.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", revealCell);
    game.appendChild(cell);
    cells.push(cell);
  }
  placeMines();
  calculateNumbers();
}

function placeMines() {
  let minesPlaced = 0;
  while (minesPlaced < minesCount) {
    const index = Math.floor(Math.random() * cells.length);
    if (!cells[index].classList.contains("mine")) {
      cells[index].classList.add("mine");
      minesPlaced++;
    }
  }
}

function calculateNumbers() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains("mine")) continue;
    let count = 0;
    const neighbors = getNeighbors(i);
    neighbors.forEach(n => {
      if (cells[n].classList.contains("mine")) count++;
    });
    if (count > 0) cells[i].textContent = count;
  }
}

function getNeighbors(index) {
  const neighbors = [];
  const x = index % size;
  const y = Math.floor(index / size);
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
        neighbors.push(ny * size + nx);
      }
    }
  }
  return neighbors;
}

function revealCell(e) {
  const cell = e.target;
  if (cell.classList.contains("revealed")) return;
  cell.classList.add("revealed");
  if (cell.classList.contains("mine")) {
    cell.textContent = "💣";
    alert("Game Over!");
    revealAll();
  } else if (cell.textContent === "") {
    const index = parseInt(cell.dataset.index);
    getNeighbors(index).forEach(i => {
      if (!cells[i].classList.contains("revealed")) {
        cells[i].click();
      }
    });
  }
}

function revealAll() {
  cells.forEach(cell => {
    cell.classList.add("revealed");
    if (cell.classList.contains("mine")) {
      cell.textContent = "💣";
    }
  });
}

createBoard();
