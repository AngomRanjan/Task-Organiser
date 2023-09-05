const newNode = (paramElement, ...paramAttribs) => {
  // create a new dom element with specified attributes
  
  const node = document.createElement(paramElement);
  if(paramAttribs) {
    paramAttribs.forEach(attrib => {
      const [name, ...value] = attrib.split('=');
      node[name] = [...value].join('=');
    });
  };
  return node;
};

export default newNode;