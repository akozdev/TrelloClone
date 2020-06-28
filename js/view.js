const view = (function () {
  function getRoot() {
    return document.getElementById('root');
  }

  function dragoverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function dropHandler(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    console.log(data);
    e.target.appendChild(document.getElementById(data));
  }

  return {
    renderWorkspace() {
      const root = getRoot();

      // Create workspace element
      const workspace = document.createElement('div');
      workspace.setAttribute('class', 'workspace');

      // Create button element
      const addColumnBtn = document.createElement('button');
      addColumnBtn.setAttribute('class', 'btn');
      addColumnBtn.setAttribute('id', 'addColumnBtn');
      addColumnBtn.textContent = 'Add column';

      workspace.appendChild(addColumnBtn);

      root.appendChild(workspace);
    },
    getAddColumnBtn() {
      return document.getElementById('addColumnBtn');
    }
  };
})();