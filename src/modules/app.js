import arrTasks from './to_class.js';
import saveLocal from './saveLocal.js';
import attachEventListeners from './attachEventListeners.js';
import { compileTaskCard, resetItemId } from './utilities.js';

const populateList = (taskList) => {
  arrTasks.tasks.forEach((task) => {
    const taskItem = compileTaskCard(task);
    taskList.appendChild(taskItem);
  });
};

const delCompleted = () => {
  const taskList = document.getElementById('ul-tasks');
  arrTasks.clearCompleted();
  saveLocal();
  const completedItems = taskList.querySelectorAll(`input:checked`);
  completedItems.forEach(item => item.closest('li').remove());
  resetItemId();
};

const handleAddForm = (e) => {
  e.preventDefault();
  const taskDescription = e.target.elements['new-task'].value.trim();
  if (arrTasks.isExist(taskDescription))
    return alert('Add Task Failed!\nTask Already Exists.');
  arrTasks.addTask(taskDescription);
  saveLocal();
  const task = arrTasks.lastItem;
  const ulTasks = document.getElementById('ul-tasks');
  ulTasks.appendChild(compileTaskCard(task));
  e.target.reset();
};

const app = () => {  
  const taskList = document.getElementById('ul-tasks');
  const addForm = document.getElementById('new-task-ph');
  const btnClear = document.getElementById('btn-clear');

  populateList(taskList);
  addForm.addEventListener('submit', handleAddForm);
  btnClear.addEventListener('click', delCompleted);
  attachEventListeners();
};

export default app;
