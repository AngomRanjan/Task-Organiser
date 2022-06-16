import arrTasks from './to_class.js';
import appendTaskUL from './appendTaskUL.js';

const addTaskItem = (description) => {
  arrTasks.addTask(description);
  appendTaskUL(arrTasks.lastAdded());
}

export default addTaskItem;