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



var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.cssClass { color: #F00; }';
document.getElementsByTagName('head')[0].appendChild(style);
style = document.getElementsByTagName('style')[0];



for(i = 1; i <= parseInt(userSquares); i++){
    var specialNum = 0;
    for(j = 1; j <= parseInt(userSquares); j++){
        var newClass = "item" + i + j + specialNum;
        style.innerHTML += `.${newClass} { 
            grid-column-start: ${i};\n
            grid-column-end: ${i+1};\n
            grid-row-start:${j};\n
            grid-row-end:${j+1};\n
            background: red;
        }`
        const div = document.createElement('div');
        div.classList.add(newClass);
        container.appendChild(div);
        console.log(newClass);
        specialNum++;
        div.addEventListener("mouseover", function(e){
            div.style.background = "blue";
        })
    }
}

/*
.item {
    grid-column-start: 1;
    grid-column-end: 50;
    grid-row-start: 1;
    grid-row-end: 50;
    background: red;
}
*/