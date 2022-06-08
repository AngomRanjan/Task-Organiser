const compileTaskItem = (task) => {
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

export default compileTaskItem;
