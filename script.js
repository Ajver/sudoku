
let sudoku = {};

function setup() {
  createCanvas(600, 600);

  sudoku = new Sudoku();
  sudoku.generateSudoku();
}

function draw() {
  background(51);
}