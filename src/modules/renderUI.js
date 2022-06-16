import arrTasks from './to_class.js';
import addTaskItem from './addTaskItem.js';
import appendTaskUL from './appendTaskUL.js';
import { resetTasks } from './reset_functions.js';
import saveLocal from './saveLocal.js';

const textInput = document.getElementById('new-task');
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

const newTaskChange = (event) => {
  event.preventDefault();
  if (textInput.value.trim() === '') {
    alert('Sorry! Task Cannot be Empty \n Tasks Not added');
  } else {
    addTaskItem(textInput.value.trim());
  }
  textInput.value = '';
  textInput.blur();
  event.stopPropagation();
};

const renderUI = () => {
  arrTasks.tasks.forEach((task) => {
    appendTaskUL(task);
  });

  textInput.addEventListener('change', newTaskChange);
  btnClear.addEventListener('click', delCompleted);
};

export default renderUI;
