import { compileTaskItem } from './taskItem.js';
import { arrTasks, Task, addTask } from './tasksList.js';
import { addIconEvent, addInputDescEvent } from './event_handlers.js';

const newTaskListener = () => {
  const textInput = document.getElementById('new-task');
  textInput.addEventListener('change', (event) => {
    event.preventDefault();
    if (textInput.value.trim() === '') {
      alert('Task Cannot be Empty \n Tasks Not added');
    } else {
      addTask(Task(textInput.value.trim()));

      const ulTasks = document.getElementById('ul-tasks');
      const newTaskAdded = arrTasks[arrTasks.length-1];
      ulTasks.appendChild(compileTaskItem(newTaskAdded));
      addIconEvent(newTaskAdded.index);
      addInputDescEvent(newTaskAdded.index);
    // addCheckBoxEvent(arrTasks[i].index);


/*
      populateTaskList();
      for (let i = 0; i < arrTasks.length; i += 1) {
        addIconEvent(arrTasks[i].index);
        addInputDescEvent(arrTasks[i].index);
        // addCheckBoxEvent(arrTasks[i].index);
      }*/
    }
    textInput.value = '';
    textInput.blur();
    event.stopPropagation();
  });
};

export default newTaskListener;
