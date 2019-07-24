const form = document.getElementById("sizePicker");
// hijack submit event to create grid
form.addEventListener('submit', function(e){
  e.preventDefault();
  makeGrid();
})
// grab initial color value
let color = document.getElementById("colorPicker").value;
// listen to any change in input value
document.getElementById("colorPicker").addEventListener("change", function(e) {
  color = e.target.value;
})
function updateColor(cell, color) {
  cell.bgColor = color;
}
// main function for drawing grid and attaching event listener to cells
function makeGrid() {
  const canvas = document.getElementById("pixelCanvas");
  let row = canvas.lastElementChild;
  while (row) { 
    canvas.removeChild(row); 
    row = canvas.lastElementChild; 
} 
  let height = parseInt(document.getElementById("inputHeight").value);
  let width = parseInt(document.getElementById("inputWidth").value);
  for (let i = 0; i < height; i++) {
    let row = document.createElement("tr");
    canvas.appendChild(row)
    for (let j = 0; j < width; j++) {
      let cell = document.createElement("td");
      cell.addEventListener('mousedown', function() {
        updateColor(cell, color);
      });
      cell.onmousemove = function(e) {
        if(e.buttons == 1) {
          updateColor(cell, color)
        }
    }
      canvas.appendChild(cell)
    }
  }
}
