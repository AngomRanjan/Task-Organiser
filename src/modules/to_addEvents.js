import arrTasks from "./to_class.js";
import removeTaskItem from "./removeTaskItem.js";
import saveLocal from "./saveLocal.js";

const isValid = (newDesc) => {
  return !(newDesc === "" || arrTasks.isExist(newDesc));
};

const updateChange = (arrIndex, newDesc) => {
  arrTasks.editTask(arrIndex, newDesc);
  saveLocal();
  return "Update Task Successful";
};

const cancelUpdate = (desc, newDesc) => {
  let msg = newDesc === "" ? "Task Is Empty!" : "Task Already Exist!";
  desc.value = arrTasks.tasks[desc.parentNode.id - 1].description;
  console.log(arrTasks.tasks[1]);
  return (msg += "\nTask Update Failed!");
};

const handleChecked = (e) => {
  const cb = e.target;
  arrTasks.tasks[cb.parentNode.id - 1].completed = cb.checked;
  saveLocal();
};

const handleChange = (e) => {
  const li = e.target.parentNode;
  const index = li.id - 1;
  const newDesc = li.children["task-desc"].value.trim();
  const msg = isValid(newDesc)
    ? updateChange(index, newDesc)
    : cancelUpdate(li.children["task-desc"], newDesc);
  alert(msg);
  li.firstElementChild.focus();
};

const handleEdit = (e) => e.target.previousElementSibling.focus();

const handleDelete = (removeTaskItem, e) => removeTaskItem(e.target.parentNode);

const addEvents = (element) => {
  const handlers = [
    handleChecked,
    handleChange,
    handleEdit,
    handleChange,
    handleDelete,
  ];
  
  handlers.forEach((handler, i) => {
    const event = i === 1 ? "change" : "click";
    const callback = i === 4 ? handler.bind(null, removeTaskItem) : handler;
    element.children[i].addEventListener(event, callback);
  });
};

export default addEvents;
