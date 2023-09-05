const compileTaskCard = ({ index, description, completed }) => {
  // Compiling Task Card
  const liTask = document.createElement('li');
  liTask.id = `1`;
  liTask.className = 'task';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'task-cb';
  checkbox.checked = completed;

  const inputDesc = document.createElement('input');
  inputDesc.type = 'text';
  inputDesc.name = 'task-desc';
  inputDesc.value = description;

  const iEdit = document.createElement('i');
  iEdit.className = 'fa-regular fa-pen-to-square';
  const iUpdate = document.createElement('i');
  iUpdate.className = 'fa-solid fa-check';
  const iDelete = document.createElement('i');
  iDelete.className = 'fa-solid fa-check';
  
  liTask.append(checkbox, inputDesc, iEdit, iUpdate, iDelete);
  return liTask;
};

export default compileTaskCard;
