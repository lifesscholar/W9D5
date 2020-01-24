const DOMNodeCollection = require("./dom_node_collection.js");

window.$lite = function (arg) {
  if (arg instanceof HTMLElement){
    const arr = [];
    arr.push(`${arg}`);
    return new DOMNodeCollection(arr);
  }
  const selectors = document.querySelectorAll(arg);
  const array = Array.from(selectors);
  return new DOMNodeCollection(array);
};

