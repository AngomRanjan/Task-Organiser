import './style.css';
import arrTasks from './modules/tasksList.js';
import compileTaskItem from './modules/taskItem.js';

const ulTasks = document.getElementById('ul-tasks');
for (let i = 0; i < arrTasks.length; i += 1) {
  ulTasks.appendChild(compileTaskItem(arrTasks[i]));
}
