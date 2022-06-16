import compileTaskCard from './compileTaskCard.js';
import addEvents from './to_addEvents.js';

const appendTaskUL = (task) => {
  const ulTasks = document.getElementById('ul-tasks');
  ulTasks.appendChild(compileTaskCard(task));
  addEvents(task.index);
};
export default appendTaskUL;