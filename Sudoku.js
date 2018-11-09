function Point(x, y) {
	this.x = x;
	this.y = y;
}

function SudokuGenerator() {

	// That method is genereting sudoku in the sud array
	this.generateSudoku = sud => {
    /*
    * Vectors with all fields, where is possible to put there some value
    * for example: number 3 you can put in each field, that is in
    * the v[2] vector (counting from 0)
    */
    let v = [];

    // On begin all vectors are full (each contains all 81 fields that is in sudoku table)
    for(let i=0; i<9; i++) {
      v.push(this.createHugeVector());
    }
    for(let cur=0; cur<9; cur++) {
      for(let i=0; i<9; i++) {
          if(v[cur].length === 0) {
            // Cannot complete sudoku!
            return false;
          }
          let p = this.getRandomPoint(v[cur]);
          sud[p.x][p.y] = cur + 1;
          for(let j=0; j<9; j++) {
            this.removeField(v[j], p.x, p.y);
          }
          this.removeRow(v[cur], p.y);
          this.removeColumn(v[cur], p.x);
          this.removeSquare(v[cur], p.x, p.y);
      }
    }

    // If sudoku has been generated successfully
    return true;
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
	this.removeField = (v, x, y) => {
    for(let i=v.length-1; i>=0; i--) {
      if(v[i].x == x) {
        if(v[i].y == y) {
          v.splice(i, 1);
          return;
        }
      }
    }
  }

	// x, y are position of field (not square), that is in square for remove
	this.removeSquare = (v, x, y) => {
    let startX = floor(x/3) * 3;
    let startY = floor(y/3) * 3;
    let toX = startX+3;
    let toY = startY+3;
    for(let xx=startX; xx<toX; xx++) {
      for(let yy=startY; yy<toY; yy++) {
        this.removeField(v, xx, yy);
      }
    }
  }

	// Remove all fields with specific y
	this.removeRow = (v, y) => {
    for(let i=v.length-1; i>=0; i--) {
      if(v[i].y == y) {
        v.splice(i, 1);
      }
    }
  }

	// Remove all fields with specific x
	this.removeColumn = (v, x) => {
    for(let i=v.length-1; i>=0; i--) {
      if(v[i].x == x) {
        v.splice(i, 1);
      }
    }
  }

	// Returns random point from vector and NOT removing that!
	this.getRandomPoint = v => v[ floor( random(v.length) ) ];
}


function Sudoku() {

  // A sudoku table
  this.sud = [];

  // Selected field position
  this.selX = -1;
  this.selY = -1;

  this.clearSudoku = () => {
    this.selX = -1;
    this.selY = -1;
    this.sud = [];
    for(let i=0; i<9; i++) {
      let row = [];
      for(let j=0; j<9; j++) {
        row.push(0);
      }
      this.sud.push(row);    
    }
  }

  // Do this automaticly while creating new Sudoku object
  this.clearSudoku();

	// Function that tests sudoku and returns if is it correct
	this.isCorrect = () => {
    let good = true;
    let vRow = [];
    let vSqr = [];
    for(let i=0; i<9; i++) {
      vRow.push([]);
      vSqr.push([]);
    }
    for(let xx=0; xx<9; xx++) {
      let vCol = [];
      for(let yy=0; yy<9; yy++) {
        let val = this.sud[xx][yy];
        if(vCol.includes(val)) {
          console.log("Col (" + val + "): [x: " + xx + " y: " + yy + "]");
          good = false;
        }
        if(vRow[xx].includes(val)) {
          console.log("Row (" + val + "): [x: " + xx + " y: " + yy + "]");
          good = false;
        }
        let sqrId = (floor(yy/3) * 3) + floor(xx/3);
        if(vSqr[sqrId].includes(val)) {
          console.log("Sqr (" + val + "): [x: " + xx + " y: " + yy + "]");
          good = false;
        }
        vCol.push(val);
        vRow[xx].push(val);
        vSqr[sqrId].push(val);
      }
    }
    return good;
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
            let fx = j*3 + b;
            let fy = i*3 + a;
            noFill();
            if(this.selX === fx) {
              if(this.selY === fy) {
                fill(242, 211, 92);
              }
            }
            stroke(100);
            rect(offX + b*cellSize, offY + a*cellSize, cellSize, cellSize);
            fill(26, 115, 221);
            noStroke();
            let val = this.sud[fx][fy];
            if(val != 0) {
              text(val, offX + b*cellSize + cellSize*0.33, offY + a*cellSize + cellSize*0.75);
            }
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
    let count = 0;
    while(!generator.generateSudoku(this.sud)) {
      count++;
    }
    console.log("After " + count + " times");
    console.log("Is sudoku correct: " + this.isCorrect());
  }

  this.select = () => {
    let cellSize = width/9;
    let x = floor(mouseX / cellSize);
    let y = floor(mouseY / cellSize);
    if(x >= 0) {
      if(x < 9) {
        if(y >= 0) {
          if(y < 9) {
            // For debugging
            // console.log('selected: [x: ' + x + ' y: ' + y + ']');
            this.selX = x;
            this.selY = y;
          }
        }
      }
    }
  }

  this.override = val => {
    if(this.selX >= 0) {
      if(this.selX < 9) {
        if(this.selY >= 0) {
          if(this.selY < 9) {
            this.sud[this.selX][this.selY] = val;
          }
        }
      }
    }
  }
}
