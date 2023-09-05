const newNode = (paramElement, ...paramAttribs) => {
  // create a new dom element with specified attributes
  
  const node = document.createElement(paramElement);
  if(paramAttribs) paramAttribs.forEach(attrib => node[attrib[0]] = attrib[1]);
  return node;
};

export default newNode;