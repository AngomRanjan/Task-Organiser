/* || ============== Event Handlers ============= || */
import { populateTaskList } from './taskItem.js';
import { Task, addTask, delTask, arrTasks } from './tasksList.js';
import { resetIcon } from './reset_functions.js';

const addInputDescEvent = (eID) => {
  const inputDesc = document.getElementById(`desc-${eID}`);
  const icon = document.getElementById(`icon-${eID}`);
  inputDesc.addEventListener('focus', (e) => {
    resetIcon();
    icon.classList.remove('bi-three-dots-vertical');
    icon.classList.add('bi-trash3');
    e.stopPropagation();
  });

  inputDesc.addEventListener('change', (e) => {
    if (inputDesc.value.trim() === '') {
      alert('Task Cannot be Empty \n task not change!');
      inputDesc.value = arrTasks[eID-1].description;
    }
    else {
      console.table(arrTasks);
      arrTasks[eID-1].description = inputDesc.value.trim();
      console.table(arrTasks);
    }
    icon.classList.remove('bi-trash3');
    icon.classList.add('bi-three-dots-vertical');
    inputDesc.blur();
    e.stopImmediatePropagation();
  });
};

const addIconEvent = (eID) => {
  const icon = document.getElementById(`icon-${eID}`);
  icon.addEventListener('click', (e) => {
    if (icon.classList.contains('bi-three-dots-vertical')) {
      document.getElementById(`desc-${eID}`).focus();
    } else {
      delTask(eID-1);
      populateTaskList();
    }
    e.stopPropagation();
  });
};

export { addIconEvent, addInputDescEvent };
/* || ============== Event Handlers  Ends============= || */