"use strict";

const container=document.querySelector('.container');
const image=document.querySelector('.image');
const resetBtn=document.querySelector("[name='reset']");
const shakeBtn=document.querySelector("[name='shake']");
const randBtn=document.querySelector("[name='random']");
let gridSize=16;
let isColored=false;

function createGrid(size)
{
    let column;

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

let divs = Array.from(document.querySelectorAll('.grid'));
divs.forEach(cell => cell.addEventListener('mouseover', addClass));

//adds black class if color button isn't toggled on
function addClass(e)
{
    let cell = e.target;

    if(!isColored)
    {
        addEventListener('hover', cell.classList.add('black'));
        cell.style='';
    }
}

//creates a new grid with user input dimensions
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

//toggles random background colors when random button is clicked
function drawColor()
{   
    if (isColored)
    {
        //is already colored, making black
        randBtn.textContent="Color: Off"
        randBtn.style.backgroundColor="";
        divs.forEach(cell => cell.addEventListener('mouseover', addClass));
        isColored=false;
    }
    else
    {
        //not colored, adding color
        randBtn.textContent="Color: On"
        randBtn.style.backgroundColor="Salmon";
        divs.forEach(cell => cell.addEventListener('mouseover', addClass));
        isColored=true;
    }
}

//clears cell colors
function shake()
{
    image.classList.add('image-shake');
    divs.forEach(cell => 
        {cell.classList.remove('black');
        cell.classList.remove('random');
        cell.style='';
    })
    setTimeout(()=>image.classList.remove('image-shake'),500);
}

function getRandomColor()
{
    return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}

resetBtn.addEventListener('click',resetGrid);
shakeBtn.addEventListener('click', shake);
randBtn.addEventListener('click', drawColor);

//checks to see which element the mouse is currently over and sets background color
container.onmouseover = function (e) {
    e = e || window.event;
    let evt = e;
    if(isColored)
    {
        evt.target.style.backgroundColor=getRandomColor();
    }
}


