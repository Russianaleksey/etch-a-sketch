const pixels = 500;


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

var userSquares = prompt("Size of grid?");
var pixelCount = String(pixels / userSquares) + "px";
console.log(userSquares);
console.log(pixelCount);



const container = document.getElementById('container');
container.style.gridTemplateColumns = `repeat(${userSquares}, ${pixelCount})`;
container.style.gridTemplateRows = `repeat(${userSquares}, ${pixelCount})`;
container.addEventListener('mouseover', event => {
    if(event.target.style.background !== 'white' && !event.target.id.includes('container') && !event.target.id.includes('changed')){
        event.target.style.background = getRandomColor();
        event.target.setAttribute('id', 'changed')
    }
})



var style = document.createElement('style');
style.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(style);
style = document.getElementsByTagName('style')[0];


var uniqueID = 0;
for(i = 1; i <= parseInt(userSquares); i++){
    for(j = 1; j <= parseInt(userSquares); j++){
        /*
        var newClass = "item" + uniqueID;
        style.innerHTML += `.${newClass} { 
            grid-column-start: ${i};\n
            grid-column-end: ${i+1};\n
            grid-row-start:${j};\n
            grid-row-end:${j+1};\n
            background: red;
        }` */
        const div = document.createElement('div');
        div.style.gridColumnStart = i;
        div.style.gridColumnEnd = i+1;
        div.style.gridRowStart = j;
        div.style.gridRowEnd = j+1;
        /* div.classList.add(newClass); */
        container.appendChild(div);
        /* uniqueID++;
        
        div.addEventListener("mouseover", function(e){
            div.style.background = "blue"; 
        }) */
    }
}

function resetBoard(){
    location.reload();
}