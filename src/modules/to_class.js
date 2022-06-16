// || =============== Tasks Class ================== ||
class ArrTasks {
  constructor() {
    this.tasks = [];
  }

  newTask(description) {
    return {
      index: this.tasks.length + 1 || 1,
      description,
      completed: false,
    };
  }

  updateIndex() {
    this.tasks = this.tasks.map((task, i) => { task.index = i + 1; return task; });
  }

  addTask(description) {
    this.tasks.push(this.newTask(description));
  }

  deleteTask(arrIndex) {
    this.tasks.splice(arrIndex, 1);
    this.updateIndex();
  }

  clearCompleted() {
    this.tasks = this.tasks.filter((t) => t.completed === false);
    this.updateIndex();
  }

  lastAdded() {
    return this.tasks[this.tasks.length - 1];
  }
}

const arrTasks = new ArrTasks();

// arrTasks.tasks = JSON.parse(localStorage.getItem('arrTaskLocal')) || [];

if (JSON.parse(localStorage.getItem('arrTaskLocal'))) {
  arrTasks.tasks = JSON.parse(localStorage.getItem('arrTaskLocal'));
} else {
  arrTasks.tasks = [];
}
export default arrTasks;
