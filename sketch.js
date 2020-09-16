const box = document.querySelector(".box");
let gridSize=18;
const canvasSize=600;
let color = 1;

//Reset grid
const reset = document.querySelector(".reset");
reset.addEventListener('click',clearGrid);

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
           square.setAttribute('style',`width:${squareSize};height:${squareSize};border:1px solid grey;margin:0`);
           square.addEventListener('mouseenter',colorGrid);
           column.appendChild(square);
       }
       box.appendChild(column);
   }
}

//Clear grid
const clear = document.querySelector(".clear");
clear.addEventListener('click',()=>{
box.innerHTML="";
createGrid(gridSize);
});


//color grid
const mono = document.querySelector(".mono");
mono.addEventListener('click',()=> color = 1);

const colorful = document.querySelector(".color");
colorful.addEventListener('click',()=>color = 2);
function colorGrid(e)
{   
    switch(color)
    {
        case 1 : e.target.style.backgroundColor = 'red';
                 break;
        case 2 : e.target.style.backgroundColor = randomColor();
                 break;
    }
};
function randomColor()
{
    let red = Math.ceil(Math.random()*255);
    let blue = Math.ceil(Math.random()*255);
    let green = Math.ceil(Math.random()*255);
    return `rgb(${red},${blue},${green})`;
}

function clearGrid(e)
{
    box.innerHTML="";
    let input = prompt("Pick size of the grid (18 to 52):");
    gridSize = parseInt(input);
    createGrid(gridSize);
}

createGrid();

