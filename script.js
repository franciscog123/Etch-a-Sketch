const container=document.querySelector('.container');
const resetBtn=document.querySelector("[name='reset']");

function createGrid(size)
{
    for(let x=0;x<size;x++)
    {
        let row=document.createElement('div');
        row.classList.add("grid");

        for(let y=0;y<size;y++)
        {
            column=document.createElement('div');
            column.classList.add("grid");
            column.textContent=y;
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

createGrid(16);

function addClass(e)
{
    let cell = e.target;
    addEventListener('hover', cell.classList.add('grid-hover'));
}

function reset(e)
{
    divs.forEach(cell => cell.classList.remove('grid-hover'));
}

const divs = Array.from(document.querySelectorAll('.grid'));
divs.forEach(cell => cell.addEventListener('mouseover', addClass));

resetBtn.addEventListener('click',reset);


