
import './style.css';/*
import newTaskListener from './modules/newTask_handler.js';
import renderUI from './modules/render_functions.js';
import delCompleted from './modules/clearAll.js';

renderUI();
newTaskListener();

document.getElementById('btn-clear').addEventListener('click', delCompleted);
*/
import arrTasks from "./modules/to_class.js";
import addTaskItem from './modules/addTaskItem.js';
import appendTaskUL from './modules/appendTaskUL.js';

arrTasks.tasks = [
  {
    index: 1,
    description: 'The',
    completed: false,
  },
  {
    index: 2,
    description: 'The Adventures',
    completed: false,
  },
  {
    index: 3,
    description: 'The Adventures Of',
    completed: false,
  },
  {
    index: 4,
    description: 'The Adventures Of Sherlock',
    completed: false,
  },
  {
    index: 5,
    description: 'The Adventures Of Sherlock Holmes',
    completed: false,
  },
];


console.table(arrTasks.tasks);

arrTasks.tasks.forEach((task) => {
  appendTaskUL(task);
});

addTaskItem('Latest Task');
console.table(arrTasks.tasks);