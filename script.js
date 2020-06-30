const workspace = document.querySelector('.workspace');

// DRAG & DROP FUNCTIONALITY
function dragstartHandler(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function dragoverHandler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function dropHandler(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  e.target.appendChild(document.getElementById(data));
}

/* Prevent from dropping on child elements */
// function dropHandler(e, el) {
//   e.preventDefault();
//   const data = e.dataTransfer.getData('text/plain');
//   el.appendChild(document.getElementById(data));
// }

// ADD COLUMN BUTTON HANDLER
function addColumn(e) {
  const column = document.createElement('div');
  column.setAttribute('class', 'column');
  column.ondrop = dropHandler;
  column.ondragover = dragoverHandler;

  workspace.appendChild(column);
}


// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.item');
  elements.forEach(el => el.addEventListener('dragstart', dragstartHandler));
});

document.getElementById('addColumnBtn').addEventListener('click', addColumn);