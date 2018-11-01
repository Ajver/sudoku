
let isFullscreen = false;
let scale = 1.0;
let sudoku = {};

function setup() {
  createCanvas(600, 600);
  sudoku = new Sudoku();

  setHTML();
}

function draw() {
  background(51);
  sudoku.draw();
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
  box.appendChild(newButton('Generate new sudoku', () => { sudoku.generateSudoku(); }));
  box.appendChild(newButton('Clear sudoku', () => { sudoku.clearSudoku(); }));
  box.appendChild(newButton('Fullscreen', () => { toogleFullScreen() }));
  let canv = document.querySelector('.p5Canvas');
  wrap.appendChild(canv);
  wrap.appendChild(box);
  body.appendChild(wrap);

  if(wrap.offsetWidth > window.innerWidth || wrap.offsetHeight > window.innerHeight) {
    toogleFullScreen();
  }
}

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

const fitToWindow = () => {
  let wrap = document.querySelector('.wrap');
  let scrProp = window.innerWidth / window.innerHeight;
  let wrpProp = wrap.offsetWidth / wrap.offsetHeight;
  if(wrpProp < scrProp) { // To height
    scale = (window.innerHeight) / wrap.offsetHeight;
  }else { // To width
    scale = window.innerWidth / wrap.offsetWidth;
  }
  wrap.style.transform = 'scale(' + scale + ')';
}

const toogleFullScreen = () => {
  if(isFullscreen) {
    let wrap = document.querySelector('.wrap');
    wrap.style.transform = 'scale(1.0)';
  }else {
    fitToWindow();
  }
  isFullscreen = !isFullscreen;
}

window.addEventListener('resize', () => { if(isFullscreen) { fitToWindow(); } });