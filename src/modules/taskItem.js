import { arrTasks } from './tasksList.js';

const resetTasks = () => {
  const ulTasks = document.getElementById('ul-tasks');
  ulTasks.innerHTML = '';
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

  const spanDesc = document.createElement('span');
  spanDesc.id = `desc-${task.index}`;
  spanDesc.textContent = task.description;

  liTask.append(checkbox, spanDesc);
  return liTask;
};

const populateTaskList = () => {
  const ulTasks = document.getElementById('ul-tasks');
  for (let i = 0; i < arrTasks.length; i += 1) {
    ulTasks.appendChild(compileTaskItem(arrTasks[i]));
  }
};

export { populateTaskList, resetTasks };
