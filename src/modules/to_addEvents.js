import arrTasks from './to_class.js';
import removeTaskItem from './removeTaskItem.js';
import saveLocal from './saveLocal.js';
import { resetIcon } from './reset_functions.js';

const taskDescFocus = (e) => {
  const icon = e.target.nextElementSibling;
  icon.className = 'item-btns bi bi-trash3';
  e.stopPropagation();
};

const taskDescBlur = () => {
  resetIcon();
};

const taskDescChanged = (e) => {
  const inputDesc = e.target;
  const arrIndex = (inputDesc.id).split('-')[1] - 1;
  const newDesc = inputDesc.value.trim();
  if (newDesc === '' || arrTasks.isExist(newDesc)) {
    const msg = (newDesc === '') ? 'Cannot Be Empty' : 'Already Exists';
    alert(`Task Change Failed!\nTask ${msg}.`);
    inputDesc.value = arrTasks.tasks[arrIndex].description;
  } else {
    arrTasks.editTask(arrIndex, newDesc);
    saveLocal();
  }
  // inputDesc.blur();
  inputDesc.previousElementSibling.focus();
};

const chkBoxClicked = (e) => {
  const checkBox = e.target;
  arrTasks.tasks[checkBox.id - 1].completed = checkBox.checked;
  saveLocal();
  const icon = checkBox.nextElementSibling.nextElementSibling;
  icon.className = checkBox.checked ? 'item-btns bi bi-trash3'
                                      : 'item-btns bi bi-three-dots-vertical';
};

const iconDelEditClicked = (e) => {
  const icon = e.target;
  const targetInput = icon.previousElementSibling;
  if (icon.classList.contains('bi-three-dots-vertical'))
    targetInput.focus();
  else
    removeTaskItem(icon.parentNode);
  e.stopPropagation();
};

const addEvents = (eID) => {
  const chkBox = eID.children[0];
  const taskDesc = eID.children[1];
  const iconDelEdit = eID.children[2];
  taskDesc.addEventListener('focus', taskDescFocus);
  taskDesc.addEventListener('change', taskDescChanged);
  taskDesc.addEventListener('blur', taskDescBlur);
  iconDelEdit.addEventListener('click', iconDelEditClicked);
  chkBox.addEventListener('click', chkBoxClicked);
};

export default addEvents;