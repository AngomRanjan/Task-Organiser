import compileTaskCard from './compileTaskCard.js';
import addEvents from './to_addEvents.js';
//import { addIconEvent, addInputDescEvent } from './event_handlers.js';                                                                           // eslint-disable-line
//import checkChanged from './toggle.js';


const appendTaskUL = (task) => {
  const ulTasks = document.getElementById('ul-tasks');
  ulTasks.appendChild(compileTaskCard(task));
  addEvents(task.index);
};
export default appendTaskUL;