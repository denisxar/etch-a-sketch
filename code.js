let divContainer = document.getElementById('container');
let header = document.getElementById('header');
let btn = document.createElement('button');
btn.textContent = 'Reset'
header.appendChild(btn);
for (let i=0;i<16;i++){
    for (let j=0;j<16;j++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('cell');
        divContainer.appendChild(newDiv);
    }
}

divContainer.addEventListener('mouseover', (event) => {
   event.target.style.backgroundColor ='black';
})

btn.addEventListener('click', (event) => {
    divContainer.innerHTML='';
    let num;
    num = prompt("Number of columns/rows(max 100)");
    console.log(num);
    divContainer.style.gridTemplateRows = 'repeat('+num+ ', 1fr)';
    divContainer.style.gridTemplateColumns = 'repeat('+num+ ', 1fr)';
    for (let i=0;i<num;i++){
        for (let j=0;j<num;j++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('cell');
            divContainer.appendChild(newDiv);
        }
    }
})