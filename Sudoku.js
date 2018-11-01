function Point(x, y) {
	this.x = x;
	this.y = y;
}

function SudokuGenerator() {

	// That method is genereting sudoku in the sud array
	this.generateSudoku = sud => {
    
  }

	// That function returns us vector with all Points from sudoku Table
	this.createHugeVector = () => {
    let v = [];
    for(let xx=0; xx<9; xx++) {
      for(let yy=0; yy<9; yy++) {
        let p = new Point(xx, yy);
        v.push(p);
      }
    }
    return v;
  }

	// Remove field in specific position
	this.removeField = () => {
  
  }

	// x, y are position of field (not square), that is in square for remove
	this.removeSquare = () => {

  }

	// Remove all fields with specific y
	this.removeRow = () => {

  }

	// Remove all fields with specific x
	this.removeColumn = () => {

  }

	// Returns random point from vector and NOT removing that!
	this.getRandomPoint = () => {

  }
}


function Sudoku() {

  // A sudoku table
  this.sud = [];
  
  for(let i=0; i<9; i++) {
    let row = [];
    for(let j=0; j<9; j++) {
      row.push(0);
    }
    this.sud.push(row);    
  }

	// Function that tests sudoku and returns if is it correct
	this.isCorrect = () => {

  }

	// That one prints the sudoku table on the screen
  this.draw = () => {
    let cellSize = width/9;
    let sqrSize = width/3; 
    textSize(cellSize*0.7);
    for(let i=0; i<3; i++) {
      for(let j=0; j<3; j++) {
        let offX = j*sqrSize;
        let offY = i*sqrSize;
        strokeWeight(2);
        stroke(100);
        for(let a=0; a<3; a++) {
          for(let b=0; b<3; b++) {
            noFill();
            stroke(100);
            rect(offX + b*cellSize, offY + a*cellSize, cellSize, cellSize);

            fill(140, 100, 190);
            noStroke();
            text(this.sud[j*3 + b][i*3 + a], offX + b*cellSize + cellSize*0.33, offY + a*cellSize + cellSize*0.75);
          }
        }
        noFill();
        strokeWeight(4);
        stroke(170);
        rect(offX, offY, sqrSize, sqrSize);
      }
    }
  } 

	// Generate the sudoku
	this.generateSudoku = () => {
    let generator = new SudokuGenerator();
    generator.generateSudoku();
  }
}
