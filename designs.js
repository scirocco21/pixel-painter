// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const form = document.getElementById("sizePicker");
form.addEventListener('submit', function(e){
  e.preventDefault();
  makeGrid();
})

function makeGrid() {
  const canvas = document.getElementById("pixelCanvas");
  let height = parseInt(document.getElementById("inputHeight").value);
  let width = parseInt(document.getElementById("inputWidth").value);
  for (let i = 0; i < height; i++) {
    let row = document.createElement("tr");
    canvas.appendChild(row)
    for (let j = 0; j < width; j++) {
      let cell = document.createElement("td");
      canvas.appendChild(cell)
    }
  }
// Your code goes here!

}
