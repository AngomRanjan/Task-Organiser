import arrTasks from './to_class.js';
import addTaskItem from './addTaskItem.js';
import appendTaskUL from './appendTaskUL.js';
import { resetTasks } from './reset_functions.js';
import saveLocal from './saveLocal.js';

const addForm = document.getElementById('new-task-ph');
const btnClear = document.getElementById('btn-clear');

const populateList = () => {
  resetTasks();
  arrTasks.tasks.forEach((task) => appendTaskUL(task));
};

const delCompleted = () => {
  arrTasks.clearCompleted();
  saveLocal();
  populateList();
};

const handleAddForm = (e) => {
  e.preventDefault();
  const taskDesc = e.target.elements['new-task'].value.trim();
  addTaskItem(taskDesc);
  e.target.reset();
};

const renderUI = () => {
  populateList();
  addForm.addEventListener('submit', handleAddForm);
  btnClear.addEventListener('click', delCompleted);
};

export default renderUI;
