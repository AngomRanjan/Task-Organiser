// || =============== Tasks Class ================== ||
class ArrTasks {
  #tasks;
  constructor(list) {
    this.#tasks = list || [];
  }

  get tasks() {
    return this.#tasks;
  }

  get length() {
    return this.#tasks.length;
  }

  get lastItem() {
    return this.#tasks[this.length - 1];
  }

  isExist(desc) {
    return this.#tasks.find(item => item.description === desc);
  };

  newTask(description) {
    return {
      index: this.length + 1,
      description: description.trim(),
      completed: false,
    };
  }

  updateIndex() {
    this.#tasks.map((task, i) => (task.index = i + 1, { ...task }))
  }

  addTask(description) {
    this.#tasks.push(this.newTask(description));
  }

  deleteTask(index) {
    this.#tasks.splice(index, 1);
    this.updateIndex();
  }

  editTask(index, newVal) {
    this.#tasks[index].description = newVal;
  }

  clearCompleted() {
    this.#tasks = this.#tasks.filter((t) => t.completed === false);
    this.updateIndex();
  }
};

const arrTasks = new ArrTasks(JSON.parse(localStorage.getItem('arrTaskLocal')));

export default arrTasks;
