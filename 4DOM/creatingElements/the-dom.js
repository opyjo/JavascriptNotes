// to create elements we use document.createElements.
const myParagraph = document.createElement("p");
myParagraph.textContent = "i am a paragraph";
myParagraph.classList.add("special")
console.log(myParagraph);


const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/500";
myImage.alt = "Nice Photo";
console.log(myImage)


const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv)

// to append the element, we use appendChild.
// to attach the element to the end of the body we use 

myDiv.appendChild(myImage);
myDiv.appendChild(myParagraph);

document.body.appendChild(myDiv);

// we can also use the append() but it is not yet well supported.

// we can also add some element to any postion of the DOM by using insertAdjacentElement

const heading = document.createElement('h2');
heading.textContent = 'i am cool';

myDiv.insertAdjacentElement('afterbegin',heading);

const orderList = document.createElement("ul");
const list = document.createElement('li');
orderList.appendChild(list);
list.textContent = 'one';
const list2 = document.createElement("li")
list2.textContent = 'two';

const list3 = document.createElement("li")
list3.textContent = 'three';


list.insertAdjacentElement('afterbegin',list2)
list.insertAdjacentElement('beforebegin',list3)

// orderList.appendChild(list2)

document.body.appendChild(orderList)