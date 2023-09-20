const createNewNode = (element, ...attributes) => {
  // Create a new DOM element with specified attributes
  const node = document.createElement(element);
  if (attributes) {
    attributes.forEach(attribute => {
      const [name, value] = attribute;
      if (value !== false) {
        node.setAttribute(name, value);
      }
    });
  }
  return node;
};

const compileTaskCard = ({ index, description, completed }) => {
  // Compiles a Task Card
  const liTask = createNewNode("li", ['id', index], ['class', 'task']);
  const checkbox = createNewNode(
    "input",
    ['type','checkbox'],
    ['name','task-cb'],
    ['checked', completed],
    ['data-action', 'checkedCompleted']
  );

  const inputDesc = createNewNode(
    "input",
    ['type','text'],
    ['name','task-desc'],
    ['value', description],
    ['data-textdesc', description],
    ['readonly', true]
  );

  const btnEdit = createNewNode("button", ['data-action', 'edit'], ['type', 'button'], ['class', 'fa-regular fa-pen-to-square']);
  const btnUpdate = createNewNode("button", ['data-action', 'update'], ['type', 'button'], ['class','fa-solid fa-check']);
  const btnRemove = createNewNode("button", ['data-action', 'remove'], ['type', 'button'], ['class','fa-regular fa-trash-can']);

  liTask.append(checkbox, inputDesc, btnEdit, btnUpdate, btnRemove);
  return liTask;
};

const resetItemId = () => {
  const listItems = Array.from(document.querySelectorAll('#ul-tasks > li'));
  listItems.map((item, index) => ({ ...item}, item.id = index + 1 ));
};

export { createNewNode, compileTaskCard, resetItemId };