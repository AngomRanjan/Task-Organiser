const compileTaskCard = (task) => {
  // Compiling Task Card
  const liTask = document.createElement('li');
  liTask.id = `task-${task.index}`;
  liTask.className = 'tasks';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.id = task.index;

  const inputDesc = document.createElement('input');
  inputDesc.id = `desc-${task.index}`;
  inputDesc.type = 'text';
  inputDesc.value = task.description;
  inputDesc.className = 'task-desc';

  const iCon = document.createElement('i');
  if (checkbox.checked) {
    iCon.classList.add('item-btns', 'bi', 'bi-trash3');
    inputDesc.classList.add('completed');
  } else {
    iCon.classList.add('item-btns', 'bi', 'bi-three-dots-vertical');
  }
  iCon.id = `icon-${task.index}`;
  liTask.append(checkbox, inputDesc, iCon);
  return liTask;
};

export default compileTaskCard;
