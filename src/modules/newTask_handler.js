import populateTaskList from './taskItem.js';

import { Task, addTask } from './tasksList.js';

const newTaskListener = () => {
  const textInput = document.getElementById('new-task');
  textInput.addEventListener('change', (event) => {
    event.preventDefault();
    if (textInput.value.trim() === '') {
      alert('Task Cannot be Empty \n Tasks Not added');
    } else {
      addTask(Task(textInput.value.trim()));
      populateTaskList();
    }
    textInput.value = '';
    textInput.blur();
    event.stopPropagation();
  });
};

export default newTaskListener;
