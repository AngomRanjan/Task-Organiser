const arrTasks = [];

const Task = (description) => ({ index: arrTasks.length + 1 || 1, description, completed: false });
const addTask = (task) => {
  arrTasks.push(task);
};

export { arrTasks, Task, addTask };