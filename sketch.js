const box = document.querySelector(".box");
let gridSize = 18;
const canvasHeight = 700;
const canvasWidth = 1024;
let color = 1;
let toggle = 1
let col = "lime";

//Reset grid
const reset = document.querySelector(".reset");
reset.addEventListener("click", clearGrid);

function createGrid(gridSize = 18, color = "white") {
  console.log(gridSize);
  var k = 1;
  for (let i = 0; i <= gridSize; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j <= gridSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      let squareHeight = canvasWidth / gridSize;
      let squareWidth = canvasWidth / gridSize;
      
      square.setAttribute(
        "style",
        `height:${squareHeight};width:${squareWidth};background-color:${color=="random"?randomColor():color};margin:0px;padding:0px`
      );
      k += 1;

      column.appendChild(square);
    }
    box.appendChild(column);
  }
}
// click to start the coloring
box.addEventListener("click", (e) => {
  e.preventDefault();
  box.addEventListener("mouseover", colorGrid);
});

//right click to stop the coloring
box.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  box.removeEventListener("mouseover", colorGrid);
});

//fill all
const fillAll = document.querySelector(".fill-all");
fillAll.addEventListener("click", () => {
  box.innerHTML = "";
  createGrid(gridSize, "random");
});

//Clear grid
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  box.innerHTML = "";
  createGrid(gridSize);
});

//color grid
const mono = document.querySelector(".mono");
mono.addEventListener("click", () => (color = 1));

const colorful = document.querySelector(".color");
colorful.addEventListener("click", () => (color = 2));

const darker = document.querySelector(".dark");
darker.addEventListener("click", () => (color = 3));
function colorGrid(e) {
  col = document.getElementById("color-picker").value;
  // console.log(col);
  switch (color) {
    case 1:
      e.target.style.backgroundColor = col;
      break;
    case 2:
      e.target.style.backgroundColor = randomColor();
      break;
    case 3:
      e.target.style.backgroundColor = darkerEverytime(
        e.target.style.backgroundColor
      );
  }
}

//get random color for each grid-item
function randomColor() {
  let red = Math.ceil(Math.random() * 255);
  let blue = Math.ceil(Math.random() * 255);
  let green = Math.ceil(Math.random() * 255);
  return `rgb(${red},${blue},${green})`;
}

//make the grid color darker
function darkerEverytime(colour) {
  if (colour == "") color;
  else {
    let temp = colour.slice(4, colour.length - 1);
    temp = temp.split(",");
    let red = +temp[0] - 25;
    let blue = +temp[1] - 25;
    let green = +temp[2] - 25;
    return `rgb(${red},${blue},${green})`;
  }
}

//Resets Grid
function clearGrid(e) {
  let input = prompt("Pick size of the grid (18 to 52):");
  if (!(input == NaN || input == null)) {
    box.innerHTML = "";
    gridSize = parseInt(input);
    createGrid(gridSize);
  }
}

createGrid();

function print() {
    html2canvas(document.querySelector(".box")).then(canvas => {
        // document.body.appendChild(canvas)
        canvas.toBlob(function(blob) {
            saveAs(blob, (new Date()).getTime() + ".png"); 
        });
    });
    console.log("cllled");
}


function infoPopUp() {
    alert("Click on the Canvas to Start Sketching\n"+
    "Right Click to Stop Sketching\n"+"");
}