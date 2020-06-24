function dragstartHandler(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function dragoverHandler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect ='move';
}

function dropHandler(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  console.log(data);
  e.target.appendChild(document.getElementById(data));
}

window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.item');
  elements.forEach(el => el.addEventListener('dragstart', dragstartHandler));

  // const el = document.getElementById('item-1');
  // el.addEventListener('dragstart', dragstartHandler);
});