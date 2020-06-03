const container=document.querySelector('.container');
const resetBtn=document.querySelector("[name='reset']");
let gridSize=16;

function createGrid(size)
{
    document.documentElement.style.setProperty("--gridSize", gridSize);
    for(let x=0;x<size;x++)
    {
        for(let y=0;y<size;y++)
        {
            column=document.createElement('div');
            column.classList.add("grid");
            container.appendChild(column);
        }
    }
}

createGrid(gridSize);

function addClass(e)
{
    let cell = e.target;
    addEventListener('hover', cell.classList.add('black'));
}

function resetGrid()
{
    gridSize=parseInt(prompt('Please input your desired grid dimensions as a single integer: ', '16'));
    if (Number.isInteger(gridSize))
    {
        divs.forEach(cell => cell.classList.remove('black'));
        divs.forEach(cell => cell.remove(cell));
        console.log(gridSize);
        createGrid(gridSize);  
    
        divs = Array.from(document.querySelectorAll('.grid'));
        divs.forEach(cell => cell.addEventListener('mouseover', addClass));
        divs.forEach(cell => cell.classList.remove('black'));
    } 
}

let divs = Array.from(document.querySelectorAll('.grid'));
divs.forEach(cell => cell.addEventListener('mouseover', addClass));
    

resetBtn.addEventListener('click',resetGrid);


