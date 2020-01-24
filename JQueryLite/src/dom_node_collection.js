class DOMNodeCollection {
  constructor (array) {
    this.array = array;
  }

  html (arg) {
    if (typeof arg === "string") {
      this.array.forEach(element => {
        element.innerHTML = arg;
      });
    } else {
      return this.array[0].innerHTML;
    }
  }

  empty () {
    this.html("");
  }

  // append(arg) {
  //   let outer;
  //   if (typeof arg === "function") {
  //     outer = arg().outerHTMl;
  //   } else if (arg instanceof String || arg instanceof HTMLElement){
  //     outer = arg;
  //   } else { // instance of JQuery lite wrapped collection
  //     outer = arg.array;
  //   }

  //   this.array.forEach(el => {
  //     debugger
  //     if (outer instanceof Array) {

  //       for (let i = 0; i < outer.length; i++) {
  //         const ele = outer[i];
  //         el.appendChild(ele);
  //       }

  //     } else {
  //       el.appendChild(outer);
  //     }
  //   });
  // }

  append(arg) {
    // three things we're taking in
    // jQuery lite collection
    // string
    //HTMLElement
    // we want take the outerHTML of each element within the arg
    // add it to the end of each element of the DOM Node Collection (this).

    // let's start by determining what we are taking in.
    let outer;
    if (arg instanceof DOMNodeCollection) {
      outer = arg.array.slice();
      arg.array.forEach(element => {
        // debugger
        document.body.removeChild(element);
      });
      this.array.forEach (el => {
        
        outer.forEach(child => {
          //make clone, place clone, loop
          debugger
          let clone = child.cloneNode(true);
          el.appendChild(clone);
        });
      });
    
    } else if ( typeof arg ===  "string") {
      outer = arg;

      this.array.forEach(el => {
        el.innerHTML += outer;
      });
    } else {
      outer = arg;

      this.array.forEach(el => {
        el.appendChild(outer);
      });
    }
  }

  attr(key, val) {
    // if no value we want to get & return
    // if value is present we want to set the key to the val
      if (val) {
        el.setAttribute(key, val);
      } else {
        return el.getAttribute(key);
      }
  }

  addClass(classNames) {
    let classArr = classNames.split(" ");
    this.array.forEach(element => {
      classArr.forEach( className => {
        element.classList.add(className);
      });
    });
  }

  removeClass(classNames) {
    let classArr = classNames.split(" ");
    this.array.forEach(element => {
      classArr.forEach (className => {
        element.classList.remove(className);
      });
    });
  }

  children () {
    let childArr = [];
    debugger
    this.array.forEach(node => {
      let child = Array.from(node.children);
      childArr = childArr.concat(child);
    });

    return new DOMNodeCollection(childArr);
  }

  parent () {
    let parentArr = [];
    this.array.forEach(node => {
      let parent = node.parentNode;
      parentArr.push(parent);
    });

    return new DOMNodeCollection(parentArr);
  }

}





module.exports = DOMNodeCollection;