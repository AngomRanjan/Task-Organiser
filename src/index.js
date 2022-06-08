import './style.css';
import { populateTaskList, resetTasks } from './modules/taskItem.js';
import { Task, addTask, arrTasks } from './modules/tasksList.js';

populateTaskList();

// const n = Task('hnhvnv');

const textInput = document.getElementById('new-task');

textInput.addEventListener('change', (event) => {
  event.preventDefault();
  console.log('Hi I am Text input Handler');
  if (textInput.value.trim() === '') {
    alert('Task Cannot be Empty \n Tasks Not added');
  } else {
    addTask(Task(textInput.value.trim()));
    console.table(arrTasks);
    resetTasks();
    populateTaskList();
  }
  textInput.value = '';
  textInput.blur();
  event.stopPropagation();
});
