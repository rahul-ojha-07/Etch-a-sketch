const box = document.querySelector(".box");
for(let i=1;i<=968;i++)
{
    const square = document.createElement('div');
    square.classList.add("sq");
    square.setAttribute('style','border:1px solid black;background-color:white;height:20px;width:20px');
    box.appendChild(square);
}
const sq = document.querySelectorAll(".sq");
sq.forEach((s)=>{
    // s.style.background='blue';
    s.addEventListener('mousemove',(e)=>{
        console.log(e.target);
        e.target.style.background='blue';});
})