/* || ============== Event Handlers ============= || */
import { populateTaskList } from './taskItem.js';
import { Task, addTask, delTask } from './tasksList.js';
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
    document.getElementById(`icon-${eID}`).classList.remove('bi-trash3');
    document.getElementById(`icon-${eID}`).classList.add('bi-three-dots-vertical');
    e.stopImmediatePropagation();
  });
};

const addIconEvent = (eID) => {
  const icon = document.getElementById(`icon-${eID}`);
  icon.addEventListener('click', (e) => {
    if (icon.classList.contains('bi-three-dots-vertical')) {
      alert('hi i am vertical');
      document.getElementById(`desc-${eID}`).focus();
    } else {
      alert(`hi iam trash ${eID}`);
      delTask(eID-1);
      populateTaskList();
    }
    e.stopPropagation();
  });
};

export { addIconEvent, addInputDescEvent };
/* || ============== Event Handlers  Ends============= || */