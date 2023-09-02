import arrTasks from './to_class.js';
import { resetIcon } from './reset_functions.js';
import removeTaskItem from './removeTaskItem.js';
import saveLocal from './saveLocal.js';

const taskDescFocus = (e) => {
  const curId = (e.target.id).replace(/[\D]/gi, '');
  const icon = document.getElementById(`icon-${curId}`);
  resetIcon();
  icon.classList.remove('bi-three-dots-vertical');
  icon.classList.add('bi-trash3');
  e.stopPropagation();
};

const taskDescChanged = (e) => {
  const inputDesc = document.getElementById(e.target.id);
  const arrIndex = (e.target.id).replace(/[\D]/gi, '') - 1;
  const icon = document.getElementById(`icon-${arrIndex + 1}`);
  const newDesc = inputDesc.value.trim();
  if (newDesc === '' || arrTasks.isExist(newDesc)) {
    const msg = (newDesc === '') ? 'Cannot Be Empty' : 'Already Exists';
    alert(`Task Change Failed!\nTask ${msg}.`);
    inputDesc.value = arrTasks.tasks[arrIndex].description;
  } else if(arrTasks.isExist(inputDesc.value.trim())) {
    alert();
  } else {
    arrTasks.tasks[arrIndex].description = inputDesc.value.trim();
    arrTasks.tasks[arrIndex].completed = false;
    saveLocal();
    document.getElementById(`${Number(arrIndex) + 1}`).checked = false;
    inputDesc.classList.remove('completed');
  }
  icon.classList.remove('bi-trash3');
  icon.classList.add('bi-three-dots-vertical');
  inputDesc.blur();
  e.stopImmediatePropagation();
};

const chkBoxChanged = (e) => {
  const checkID = e.target.id;
  const checkValue = document.getElementById(checkID).checked;
  arrTasks.tasks[checkID - 1].completed = checkValue;
  saveLocal();
  const icon = document.getElementById(`icon-${checkID}`);
  const textDesc = document.getElementById(`desc-${checkID}`);
  textDesc.classList.toggle('completed');
  resetIcon();
  icon.classList.remove('bi-trash3', 'bi-three-dots-vertical');
  if (checkValue) {
    icon.classList.add('bi-trash3');
  } else {
    icon.classList.add('bi-three-dots-vertical');
  }
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
  const chkBox = document.getElementById(eID);
  const taskDesc = document.getElementById(`desc-${eID}`);
  const iconDelEdit = document.getElementById(`icon-${eID}`);
  taskDesc.addEventListener('focus', taskDescFocus);
  taskDesc.addEventListener('change', taskDescChanged);
  iconDelEdit.addEventListener('click', iconDelEditClicked);
  chkBox.addEventListener('change', chkBoxChanged);
};

export default addEvents;