import arrTasks from './to_class.js';

const saveLocal = () => {
  localStorage.setItem('arrTaskLocal', JSON.stringify(arrTasks.tasks));
};

export default saveLocal;