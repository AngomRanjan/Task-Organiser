import arrTasks from './to_class.js';
import appendTaskUL from './appendTaskUL.js';
import saveLocal from './saveLocal.js';

const addTaskItem = (description) => {
  arrTasks.addTask(description);
  saveLocal();
  appendTaskUL(arrTasks.lastAdded());
};

export default addTaskItem;