
let isFullscreen = false;
let scale = 1.0;
let sudoku = {};

function setup() {
  createCanvas(600, 600);
  sudoku = new Sudoku(sud);
  console.log("Is sudoku correct: " + sudoku.isCorrect());

  setHTML();
}

function draw() {
  background(51);
  sudoku.draw();
}

//////////////////////////////////////////////////////////////////////////////////////

function Point(x, y) {
	this.x = x;
	this.y = y;
}

function Sudoku(sud) {

  // A sudoku table
  this.sud = sud;

  // Selected field position
  this.selX = -1;
  this.selY = -1;

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


//////////////////////////////////////////////////////////////////////////////////////

function mousePressed() {
  mouseX = floor(mouseX / scale);
  mouseY = floor(mouseY / scale);
  sudoku.select();
  // console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
}

function keyPressed() {
  let val = keyCode - 48;
  if(val > 0) {
    if(val <= 9) {
      sudoku.override(val);
    }
  }
}

const newButton = (title, ev) => {
  let btn = document.createElement('button');
  btn.classList.add('btn');
  btn.addEventListener('click', ev);
  btn.innerHTML = title;
  return btn;
}

const setHTML = () => {
  let body = document.querySelector('body');

  // Container for p5Canvas and btn-container
  let wrap = document.createElement('div');
  wrap.classList.add('wrap');
  let box = document.createElement('div');
  box.classList.add('btn-container');
  //box.appendChild(newButton('Generate new sudoku', () => { sudoku.generateSudoku(); }));
  box.appendChild(newButton('New sudoku', () => { location.reload(); }));
  box.appendChild(newButton('Fit to window', () => { toogleFullScreen() }));
  let canv = document.querySelector('.p5Canvas');
  wrap.appendChild(canv);
  wrap.appendChild(box);
  body.appendChild(wrap);
  let footer = document.createElement('footer');
  let footCont = document.createElement('p');
  footCont.innerHTML = 'Made by Dominik Zawlocki ';
  footCont.innerHTML += '<a href="https://github.com/Ajver/sudoku" target="_blank" title="Look at my other projects">My Github</a>';
  footer.appendChild(footCont);
  body.appendChild(footer);

  if(wrap.offsetWidth > window.innerWidth || wrap.offsetHeight > window.innerHeight) {
    toogleFullScreen();
  }
}

const fitToWindow = () => {
  let wrap = document.querySelector('.wrap');
  let scrProp = window.innerWidth / window.innerHeight;
  let wrpProp = wrap.offsetWidth / wrap.offsetHeight;
  if(wrpProp < scrProp) { // Fit to height
    scale = (window.innerHeight) / wrap.offsetHeight;
  }else { // Fit to width
    scale = window.innerWidth / wrap.offsetWidth;
  }
  wrap.style.transform = 'scale(' + scale + ')';
}

const toogleFullScreen = () => {
  if(isFullscreen) {
    let wrap = document.querySelector('.wrap');
    wrap.style.transform = 'scale(1.0)';
    scale = 1.0;
  }else {
    fitToWindow();
  }
  isFullscreen = !isFullscreen;
}

window.addEventListener('resize', () => { if(isFullscreen) { fitToWindow(); } });