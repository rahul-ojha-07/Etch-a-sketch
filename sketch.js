const box = document.querySelector(".box");
let gridSize=18;
const canvasSize=600;
let color = 1;
let toggle = 1;

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
           square.setAttribute('style',`width:${squareSize};height:${squareSize};border:1px solid white;margin:0`);
           square.addEventListener('mouseenter',colorGrid); 

           column.appendChild(square);
       }
       box.appendChild(column);
   }
}
//Double click paint




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

const darker = document.querySelector(".dark");
darker.addEventListener('click',()=>color = 3);
function colorGrid(e)
{   
    switch(color)
    {
        case 1 : e.target.style.backgroundColor = 'rgb(212, 70, 17)';//red
                 break;
        case 2 : e.target.style.backgroundColor = randomColor();
                 break;
        case 3 : e.target.style.backgroundColor = darkerEverytime(e.target.style.backgroundColor);
    }
};
function randomColor()
{
    let red = Math.ceil(Math.random()*255);
    let blue = Math.ceil(Math.random()*255);
    let green = Math.ceil(Math.random()*255);
    return `rgb(${red},${blue},${green})`;
}
function darkerEverytime(colour)
{ 
   if(colour == "")
   color;
   else
   {
       let temp = colour.slice(4,colour.length-1);
       temp = temp.split(',');
       let red = +temp[0] - 25;
       let blue = +temp[1] - 25;
       let green = +temp[2] - 25;
       return `rgb(${red},${blue},${green})`;
   }
}

//Resets Grid
function clearGrid(e)
{
    box.innerHTML="";
    let input = prompt("Pick size of the grid (18 to 52):");
    gridSize = parseInt(input);
    createGrid(gridSize);
}

createGrid();

