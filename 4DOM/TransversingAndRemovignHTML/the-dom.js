//transvering means going up, dwon over the DOM.
// in a nutshell,. An element is one specific type of node as there are many other types of nodes (text nodes, comment nodes, document nodes, etc...). ... The body node would have its list of child nodes (the top level elements in your HTML page) basically from my understanding currently anything that seems like each line in the HTML.
// const wes = document.querySelector(".wes")
// // console.log(wes);

// console.log(wes.children);//gives all the child elements
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

// console.log(wes.childNodes);// produces all the nodes in the "p" tag

// to removed elements from the Dom we use remove().

const p = document.createElement("p");
p.textContent = "i will be removed shortly";
document.body.appendChild(p);

p.remove(); // the paragraph is removed

console.log(p); // the fact that we removed it does not mean it is still not in the DOM. it is saved somewhere in the javascript memory.
