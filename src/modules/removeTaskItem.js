import arrTasks from './to_class.js';
import saveLocal from './saveLocal.js';

const updateElementId = () => {
  const items =Array.from(document.querySelectorAll('#ul-tasks > li'));
  items.map((li, i) => (
    li.id = `task-${i + 1}`,
    li.children[0].id = i + 1,
    li.children[1].id =`desc-${i + 1}`,
    li.children[2].id =`icon-${i + 1}`,
    {...li}
  ));
};

const removeTaskItem = (taskLi) => {
  const eID = taskLi.id.split('-')[1];
  arrTasks.deleteTask(eID - 1);
  saveLocal();
  taskLi.remove();
  updateElementId();
};

export default removeTaskItem;
