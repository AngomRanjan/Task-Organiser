// function saveLocal() {
//   localStorage.setItem('arrTaskLocal', JSON.stringify(arrTasks));
// }

//const arrTasks = JSON.parse(localStorage.getItem('arrTaskLocal')) || [];
const arrTasks = [];

const Task = (description) => ({ index: arrTasks.length + 1 || 1, description, completed: false });
const addTask = (task) => {
  arrTasks.push(task);
};

const updateIndex = () => {
  for (let i = 0; i < arrTasks.length; i += 1) {
    arrTasks[i].index = i + 1;
  }
};

const delTask = (arrIndex) => {
  console.table(arrTasks);
  arrTasks.splice(arrIndex, 1);
  updateIndex();
  console.table(arrTasks);
};

export {
  arrTasks, Task, addTask, delTask, updateIndex,
};