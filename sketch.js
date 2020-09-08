const box = document.querySelector(".box");

function createGrid(no_of_sq=968,color='white',height='20px',width='20px'){
    for(let i=1;i<= +no_of_sq;i++)
    {
        const square = document.createElement('div');
        square.classList.add("sq");
        square.setAttribute('style',`border:1px solid black;background-color:${color};height:${height};width:${width}`);
        box.appendChild(square);
    }
}
{createGrid();}


const sq = document.querySelectorAll(".sq");
sq.forEach((s)=>{
    // s.style.background='blue';
    s.addEventListener('mousemove',(e)=>{
      
        e.target.style.background='blue';});
})

//Large Grid size


//Clear grid
const clear = document.querySelector(".clear");
const clearSq = document.querySelectorAll(".sq");
clear.addEventListener('click',()=>{sq.forEach((s)=>{s.style.background='white'})});






// for(let i=1;i<=968;i++)
// {
//  const square = document.createElement('div');
//  square.classList.add("sq");
//  square.setAttribute('style','border:1px solid black;background-color:white;height:20px;width:20px');
//  box.appendChild(square);
// }