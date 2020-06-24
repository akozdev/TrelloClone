const controller = (function(model, view) {

  function setupEventListeners() {

    function dragstartHandler(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
    }

    console.log('Hello');

    window.addEventListener('DOMContentLoaded', () => {
      const elements = document.querySelectorAll('.item');
      elements.forEach(el => el.addEventListener('dragstart', dragstartHandler));
    });
  }

  return {
    init() {
      view.renderWorkspace();
      setupEventListeners();
    }
  };
})(model, view);