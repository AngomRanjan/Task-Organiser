import './style.css';
import { populateTaskList } from './modules/taskItem.js';
import { Task, addTask, arrTasks } from './modules/tasksList.js';

populateTaskList();

// const n = Task('hnhvnv');
addTask(Task('hnhvnv'));
console.table(arrTasks);

const textInput = document.getElementById('new-task');

textInput.addEventListener('change', (event) => {
  event.preventDefault();
  console.log('Hi I am Text input Handler');
  if (textInput.value.trim() === '') {
    alert('Task Cannot be Empty \n Tasks Not added');
  }
  textInput.value = '';
  textInput.blur();
  event.stopPropagation();
});
