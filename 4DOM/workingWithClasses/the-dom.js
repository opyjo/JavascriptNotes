// adding and selecting classes is one of the most important features of the DOM manipulation. the idea is that by adding, removing and toggling classes you can easily add interaction to the DOM. Adding, removing and toggling classes brings about visible changes to the DOM INTERPHASE and thus create visual effects.

// const pic = document.querySelector(".nice");
//     console.log(pic.classList);

//     pic.classList.add("open");
//     pic.classList.add("closed");
//     // pic.classList.remove("closed")

//     pic.classList.toggle("round");

//     // also to confirm if an element contains a class we use
//     const check = pic.classList.contains("round")
//     console.log(check)
//     console.log(typeof check)

const pic = document.querySelector(".nice");
console.log(pic.classList);

pic.classList.add("round");
