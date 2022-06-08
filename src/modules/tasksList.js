const arrTasks = [
  {
    index: 0,
    description: 'Join Morning Group Session',
    completed: false,
  },
  {
    index: 1,
    description: 'Join Morning Program Session',
    completed: false,
  },
  {
    index: 2,
    description: 'Join Evening Program Session',
    completed: false,
  },
  {
    index: 3,
    description: 'Join Evening Stand-Up',
    completed: false,
  },
];

const Task = (description) => ({ index: arrTasks.length, description, completed: false });
const addTask = (task) => {
  arrTasks.push(task);
};

export { arrTasks, Task, addTask };