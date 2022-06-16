/**
 * @jest-environment jsdom
 */

import arrTasks from './to_class.js';
import addTaskItem from './addTaskItem.js';
import removeTaskItem from './removeTaskItem.js';
import saveLocal from './saveLocal.js';

document.body.innerHTML = '<ul class="ul-tasks" id="ul-tasks"></ul>';
arrTasks.tasks = [];

describe('test addTaskItem and LocalStorage', () => {
  test('add task to show arrTask.tasks length 1', () => {
    addTaskItem('to check test');
    expect(arrTasks.tasks).toHaveLength(1);
  });

  test('test for local storage', () => {
    saveLocal();
    expect(JSON.parse(localStorage.getItem('arrTaskLocal'))).toHaveLength(1);
  });

  test('add task to show arrTask.tasks length 2', () => {
    addTaskItem('to check test2');
    expect(arrTasks.tasks).toHaveLength(2);
  });

  test('test for local storage', () => {
    saveLocal();
    expect(JSON.parse(localStorage.getItem('arrTaskLocal'))).toHaveLength(2);
  });
});

describe('test removeTaskItem and LocalStorage', () => {
  test('remove task to show arrTask.tasks length 0', () => {
    removeTaskItem(1);
    expect(arrTasks.tasks).toHaveLength(1);
  });

  test('test for local storage', () => {
    saveLocal();
    expect(JSON.parse(localStorage.getItem('arrTaskLocal'))).toHaveLength(1);
  });
  test('remove task to show arrTask.tasks length 0', () => {
    removeTaskItem(1);
    expect(arrTasks.tasks).toHaveLength(0);
  });

  test('test for local storage', () => {
    saveLocal();
    expect(JSON.parse(localStorage.getItem('arrTaskLocal'))).toHaveLength(0);
  });
});
