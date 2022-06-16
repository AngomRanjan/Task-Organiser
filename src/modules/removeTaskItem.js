import arrTasks from './to_class.js';
import saveLocal from './saveLocal.js';

const updateElementId = (firstItem, lastItem) => {
  for (let i = firstItem; i <= lastItem; i += 1) {
    const li = document.getElementById(`task-${i}`);
    const inputText = document.getElementById(`desc-${i}`);
    const chkBox = document.getElementById(`${i}`);
    const icon = document.getElementById(`icon-${i}`);
    li.id = `task-${i - 1}`;
    inputText.id = `desc-${i - 1}`;
    chkBox.id = `${i - 1}`;
    icon.id = `icon-${i - 1}`;
  }
};

const removeTaskItem = (eID) => {
  arrTasks.deleteTask(eID - 1);
  saveLocal();
  const liTask = document.getElementById(`task-${eID}`);
  liTask.parentNode.removeChild(liTask);
  updateElementId(Number(eID) + 1, arrTasks.tasks.length + 1);
};

export default removeTaskItem;
