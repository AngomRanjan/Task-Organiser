import arrTasks from "./to_class.js";
import saveLocal from "./saveLocal.js";
import { resetItemId } from "./utilities.js";

const isValidDescription = (newDesc) => {
  return !(newDesc === "" || arrTasks.isExist(newDesc));
};

const updateTaskDescription = (textInput) => {
  const newDescription = textInput.value.trim();
  const taskId = textInput.parentNode.id - 1;
  if (textInput.dataset.textdesc !== newDescription) {
    if (isValidDescription(newDescription)) {
      arrTasks.editTask(taskId, newDescription);
      textInput.dataset.textdesc = newDescription;
      saveLocal();
      alert("Update Task Successful");
    } else {
      textInput.value = textInput.dataset.textdesc;
      alert("Task Update Failed!");
    }
  }
  textInput.readOnly = true;
  textInput.previousElementSibling.focus();
};

const handleTaskDescriptionBlur = (e) => {
  if (e.target.type === 'text' && !e.target.readOnly) 
  updateTaskDescription(e.target);
};

const handleTaskDescriptionKeyDown = (e) => {
  if (
    e.target.type !== "text" ||
    e.target.readOnly ||
    !["Enter", "Escape"].includes(e.key)
  )
    return;
  if (e.key === "Escape") e.target.value = e.target.dataset.textdesc;
  updateTaskDescription(e.target);
};

const handleClick = (e) => {
  const action = e.target.dataset.action;
  if (!action) return;
  const listItem = e.target.closest('li');
  const textInput = listItem.children['task-desc'];
  switch (action) {
    case "edit":
      textInput.readOnly = false;
      textInput.focus();
      break;
    case "remove":
      arrTasks.deleteTask(listItem.id - 1);
      saveLocal();
      listItem.remove();
      resetItemId();
      break;
    case "checkedCompleted":
      arrTasks.tasks[listItem.id - 1].completed = e.target.checked;
      saveLocal();
      break;

    default:
      break;
  }
};

const attachEventListeners = () => {
  const itemList = document.getElementById('ul-tasks');
  
  itemList.addEventListener('click', handleClick);
  itemList.addEventListener('blur', handleTaskDescriptionBlur, true);
  itemList.addEventListener('keydown', handleTaskDescriptionKeyDown, true);
};

export default attachEventListeners;
