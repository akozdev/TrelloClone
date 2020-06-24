const view = (function() {
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

  return {

  };
})();