import newNode from "./utilities";

const compileTaskCard = ({ index, description, completed }) => {
  // Compiles a Task Card
  const liTask = newNode("li", ['id', index], ['className', 'task']);
  const checkbox = newNode(
    "input",
    ['type','checkbox'],
    ['name','task-cb'],
    ['checked', completed]
  );

  const inputDesc = newNode(
    "input",
    ['type','text'],
    ['name','task-desc'],
    ['value', description]
  );

  const iEdit = newNode("i", ['className', 'fa-regular fa-pen-to-square']);
  const iUpdate = newNode("i", ['className','fa-solid fa-check']);
  const iDelete = newNode("i", ['className','fa-regular fa-trash-can']);

  liTask.append(checkbox, inputDesc, iEdit, iUpdate, iDelete);
  return liTask;
};

export default compileTaskCard;
