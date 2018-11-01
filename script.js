
let sudoku = {};

function setup() {
  createCanvas(600, 600);

  sudoku = new Sudoku();
  sudoku.draw();
}

function draw() {
  background(51);
}