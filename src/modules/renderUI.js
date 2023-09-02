import arrTasks from './to_class.js';
import addTaskItem from './addTaskItem.js';
import appendTaskUL from './appendTaskUL.js';
import { resetTasks } from './reset_functions.js';
import saveLocal from './saveLocal.js';

const addForm = document.getElementById('new-task-ph');
const btnClear = document.getElementById('btn-clear');

const delCompleted = (e) => {
  arrTasks.clearCompleted();
  saveLocal();
  resetTasks();
  arrTasks.tasks.forEach((task) => {
    appendTaskUL(task);
  });
  e.stopPropagation();
};

const handleAddForm = (event) => {
  event.preventDefault();
  const taskDesc = addForm.firstElementChild.value.trim();
  if (arrTasks.isExist(taskDesc)) {
    alert('Add Task Failed!\nTask Already Exists.');
    return;
  } else {
    addTaskItem(taskDesc);
  }
  addForm.reset();
};

const renderUI = () => {
  arrTasks.tasks.forEach((task) => {
    appendTaskUL(task);
  });

  addForm.addEventListener('submit', handleAddForm);
  btnClear.addEventListener('click', delCompleted);
};

export default renderUI;
