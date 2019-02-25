let container = document.getElementById('container');
let box;
let innerBox;

function createGrid (length) {
    for(let i = 0; i < length; i++) {
      box = document.createElement("div");
      box.classList.add('box');
      container.appendChild(box);
      if(i === 0) {
        container.removeChild(box);
      }
    for(let j = 0; j < length; j++) {
      innerBox = document.createElement("div");
      innerBox.classList.add('innerBox');
      container.appendChild(innerBox);
    }
  }

}

createGrid(16);

container.addEventListener('mouseover', changeBackground);

function changeBackground(e) {
  console.log(e.target);
  e.target.style.backgroundColor = "#ffbff8";
}

let button = document.getElementById("btn");

button.addEventListener('click', clearCanvas);

function clearCanvas() {
  let newNumber = prompt('The canvas is about to be cleared. Please enter the number of cells you would like the new grid to show.', '');
  console.log(newNumber);
  container.innerHTML = "";
  createGrid(newNumber);
}
