function Point() {
	this.x = 0;
	this.y = 0;
}

function SudokuGenerator() {
	
	// That method is genereting sudoku in the sud array
	this.generateSudoku = sud => {

  }

	// That function returns us vector with all Points from sudoku Table
	this.createHugeVector = () => {
    
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
    
  } 

	// Generate the sudoku
	this.generateSudoku = () => {

  }
}
