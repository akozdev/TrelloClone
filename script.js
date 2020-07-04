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

  const colTitle = document.createElement('span');
  colTitle.setAttribute('class', 'column-title');

  const colTitleText = document.createTextNode('Title');

  colTitle.appendChild(colTitleText);
  column.appendChild(colTitle);
  workspace.appendChild(column);
}


// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.item');
  elements.forEach(el => el.addEventListener('dragstart', dragstartHandler));
});

document.getElementById('addColumnBtn').addEventListener('click', addColumn);


// Titles
const titles = document.querySelectorAll('.column-title');

titles.forEach(title => {
  title.addEventListener('click', e => {
    const column = e.target.parentElement;
    const input = document.createElement('input');
    input.setAttribute('class', 'title-input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', 'Title');

    input.addEventListener('keyup', e => {
      if (e.code === 'Enter') {
        const title = document.createElement('span');
        title.setAttribute('class', 'column-title');

        const titleText = document.createTextNode(e.target.value);

        title.appendChild(titleText);
        e.target.replaceWith(title);
      }
    });

    e.target.replaceWith(input);
  });
});


// Observer if there are changes in the workspace (new columns added)
const config = { childList: true }

const callback = function(mutationList, observer) {
  const titles = document.querySelectorAll('.column-title');

  titles.forEach(title => {
    title.addEventListener('click', e => {
      console.log(e.target);
      e.target.remove();
    });
  });
}

const observer = new MutationObserver(callback);
observer.observe(workspace, config);