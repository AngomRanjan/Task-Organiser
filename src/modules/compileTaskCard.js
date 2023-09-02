const compileTaskCard = ({ index, description, completed }) => {
  // Compiling Task Card
  const liTask = document.createElement('li');
  liTask.id = `task-${index}`;
  liTask.className = 'tasks';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;
  checkbox.id = index;

  const inputDesc = document.createElement('input');
  inputDesc.id = `desc-${index}`;
  inputDesc.type = 'text';
  inputDesc.value = description;
  inputDesc.className = completed ? 'task-desc completed' : 'task-desc';

  const iCon = document.createElement('i');
  iCon.className = completed ? 'item-btns bi bi-trash3' : 'item-btns bi bi-three-dots-vertical';
  iCon.id = `icon-${index}`;
  liTask.append(checkbox, inputDesc, iCon);
  return liTask;
};

export default compileTaskCard;
