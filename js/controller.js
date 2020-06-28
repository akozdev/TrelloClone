const controller = (function(model, view) {

  function setupEventListeners() {

    function dragstartHandler(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
    }

    window.addEventListener('DOMContentLoaded', () => {
      const elements = document.querySelectorAll('.item');
      elements.forEach(el => el.addEventListener('dragstart', dragstartHandler));
    });

    const addColumnBtn = view.getAddColumnBtn();
    addColumnBtn.addEventListener('click', addColumn);
  }

  function addColumn() {
    // 1. Add info about the column to the model
    model.addColumn();

    // 2. Render column

  }

  return {
    init() {
      view.renderWorkspace();
      setupEventListeners();
    }
  };
})(model, view);