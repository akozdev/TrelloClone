const model = (function() {

  class Store {
    constructor() {
      this.columns = [];
      this.items = [];
    }

    addColumn(column) {
      this.columns.push(column);
    }

    removeColumn(id) {
      return this.columns = this.columns.filter(column => column.id !== id);
    }
  }

  const store = new Store();

  class Column {
    constructor() {
      this.id = generateId();
      this.title = 'New column';
    }
  }

  const generateId = (function() {
    let id = 0;

    return function() {
      return id++;
    }
  })();

  return {
    addColumn() {
      const column = new Column();
      store.addColumn(column);
    },
    getColumn() {

    }
  };
})();