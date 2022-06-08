import './style.css';
import populateTaskList from './modules/taskItem.js';
import { Task, addTask, arrTasks } from './modules/tasksList.js';

populateTaskList();

const textInput = document.getElementById('new-task');

textInput.addEventListener('change', (event) => {
  event.preventDefault();
  if (textInput.value.trim() === '') {
    alert('Task Cannot be Empty \n Tasks Not added');
  } else {
    addTask(Task(textInput.value.trim()));
    console.table(arrTasks);
    populateTaskList();
  }
  textInput.value = '';
  textInput.blur();
  event.stopPropagation();
});
