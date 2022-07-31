const heading = document.querySelector("h2");


// //we can also set the text content property on the element
heading.textContent = "i am cool"
console.log(heading.textContent)

// textContent is almost the same as innerHTML the only main difference is that the textContent gives the content of the text whihc may include the styles etc while innerHTMl will only reveal the text content
console.log(heading.innerHTML);

const pizzaList = document. querySelector('.pizza')
console.log(pizzaList.textContent);

// we can also use a method to add some more text to the end of something
// example insertAjacentHTML( position,element)
// pizzaList.insertAdjacentText("afterend", "🍕");

// heading.insertAdjacentText("afterbegin", "i am new here");
// console.log(heading.innerHTML);

// const pizzalist = document.querySelector(".pizza");
// console.log(pizzalist);

// pizzalist.insertAdjacentText("afterbegin", "i am new here");
