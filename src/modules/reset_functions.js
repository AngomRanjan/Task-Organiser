/* || ============== Reset Functions  ============= || */

const resetTasks = () => {
  const ulTasks = document.getElementById('ul-tasks');
  ulTasks.innerHTML = '';
};

const resetIcon = () => {
  const icons = Array.from(document.getElementsByClassName('item-btns'));

  icons.forEach((icon) => {
    const checkBox = icon.parentNode.firstElementChild;
    icon.className = checkBox.checked ? 'item-btns bi bi-trash3'
                                      : 'item-btns bi bi-three-dots-vertical';
  });
};

export { resetTasks, resetIcon };
/* || ============== Reset Functions Ends ============= || */
