import { arrTasks } from './tasksList.js';
import { populateTaskList } from './taskItem.js';
import { addIconEvent, addInputDescEvent } from './event_handlers.js';

const renderUI = () => {
  populateTaskList();
  for (let i = 0; i < arrTasks.length; i += 1) {
    addIconEvent(arrTasks[i].index);
    addInputDescEvent(arrTasks[i].index);
    // addCheckBoxEvent(arrTasks[i].index);
  }
};

export default renderUI;