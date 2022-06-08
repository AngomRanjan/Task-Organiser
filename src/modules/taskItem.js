import { arrTasks } from './tasksList.js';

const resetTasks = () => {
  const ulTasks = document.getElementById('ul-tasks');
  ulTasks.innerHTML = '';
};

const resetIcon = () => {
  const icons = Array.from(document.getElementsByClassName('item-btns'));
  icons.forEach((icon) => {
    icon.classList.remove('bi-trash3', 'bi-three-dots-vertical');
    icon.classList.add('bi-three-dots-vertical');
  });
};

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
    }
    e.stopPropagation();
  });
};

const compileTaskItem = (task) => {
  // Compiling Task Card
  const liTask = document.createElement('li');
  liTask.id = `task-${task.index}`;
  liTask.className = 'tasks';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.selected;
  checkbox.id = task.index;

  const inputDesc = document.createElement('input');
  inputDesc.id = `desc-${task.index}`;
  inputDesc.type = 'text';
  inputDesc.value = task.description;
  inputDesc.className = 'task-desc';

  const iCon = document.createElement('i');
  iCon.classList.add('item-btns', 'bi', 'bi-three-dots-vertical');
  iCon.id = `icon-${task.index}`;

  liTask.append(checkbox, inputDesc, iCon);
  return liTask;
};

const populateTaskList = () => {
  const ulTasks = document.getElementById('ul-tasks');
  for (let i = 0; i < arrTasks.length; i += 1) {
    ulTasks.appendChild(compileTaskItem(arrTasks[i]));
    addIconEvent(arrTasks[i].index);
    addInputDescEvent(arrTasks[i].index);
    // addCheckBoxEvent(arrTasks[i].index);
  }
};

export { populateTaskList, resetTasks };
