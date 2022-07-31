// The DOM is a programming interface for HTML and XML documents. it represents the page so that programs can change the document structure, style and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
// The webpage is a document. This document can either be displayed in the browser window or the HTML source. The Document Object model represent the same document so that it can be manipulated.The DOM is an object oreinted programming which can be modified with a scripting language such as javascript.

//A "node", in this context, is simply an HTML element. The "DOM" is a tree structure that represents the HTML of the website, and every HTML element is a "node"

// The idea behind selecting elements is going the DOM and using the querySelector method to select an element, store it in an variable and this variable becomes an object which can then be manipulated (opyjo 2020.)

// There are two ways to select element in the DOM

//1. querySelector will give the first matching element
//2. querySelectorAll will give all matching element in the DOM.

// How to look inside a selected element to select an element inside the selected one.

const heading = document.querySelector("h2");
console.log(heading.textContent);
heading.textContent = "wes is cool";
