const box = document.querySelector(".box");
let gridSize=18;
const canvasSize=600;

//Clear grid
const clear = document.querySelector(".clear");
clear.addEventListener('click',clearGrid);

function createGrid(gridSize=18)
{
    console.log(gridSize); 
   for(let i=0;i<gridSize;i++)
   {
       const column = document.createElement("div");
       column.classList.add("column");
       for(let j=0;j<gridSize;j++)
       {
           const square = document.createElement("div");
           square.classList.add("square");
           let squareSize = canvasSize/gridSize;
           square.setAttribute('style',`width:${squareSize};height:${squareSize};border:1px solid grey`);
           square.addEventListener('mouseenter',colorGrid);
           column.appendChild(square);
       }
       box.appendChild(column);
   }
}


//color grid
function colorGrid(e)
{
   e.target.style.backgroundColor = 'blue';
}

function clearGrid(e)
{
    box.innerHTML="";
    let input = prompt("Pick size of the grid (18 to 52):");
    gridSize = parseInt(input);
    createGrid(gridSize);
}

createGrid();

