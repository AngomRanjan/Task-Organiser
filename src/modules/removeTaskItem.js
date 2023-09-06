import arrTasks from './to_class.js';
import saveLocal from './saveLocal.js';

const updateElementId = () => {
  const items =Array.from(document.querySelectorAll('#ul-tasks > li'));
  items.map((li, i) => (li.id = i +1 , {...li}));
};

const removeTaskItem = (taskLi) => {
  arrTasks.deleteTask(taskLi.id - 1);
  saveLocal();
  taskLi.remove();
  updateElementId();
};

export default removeTaskItem;
