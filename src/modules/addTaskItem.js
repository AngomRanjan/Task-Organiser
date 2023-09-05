import arrTasks from './to_class.js';
import appendTaskUL from './appendTaskUL.js';
import saveLocal from './saveLocal.js';

const addTaskItem = (description) => {  
  if (arrTasks.isExist(description))
    return alert('Add Task Failed!\nTask Already Exists.');
  arrTasks.addTask(description);
  saveLocal();
  appendTaskUL(arrTasks.lastItem);
};

export default addTaskItem;