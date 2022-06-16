/**
 * @jest-environment jsdom
 */

import arrTasks from './to_class.js';
import addTaskItem from './addTaskItem.js'

describe('test add and remove', () => {

  window.localStorage = Storage.prototype;

  test('add task to show arrTask.tasks length 1', () => {
    addTaskItem('to check test');
    expect(arrTasks.tasks).toHaveLength(1);
  });

  test('add task to show arrTask.tasks length 2', () => {
    addTaskItem('to check test2');
    expect(arrTasks.tasks).toHaveLength(2);
  });

  test('delete task to show arrTask.tasks length 1', () => {
    arrTasks.deleteTask(1);
    expect(arrTasks.tasks).toHaveLength(1);
  });
  
});
