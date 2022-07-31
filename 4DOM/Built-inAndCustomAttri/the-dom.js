//Attributes provide additional information about HTML elements. attributes work the same way in the DOm manipulations also

const pic = document.querySelector(".nice");
    console.log(pic.classList);

// pic.alt = "nice view"; // setter
// console.log(pic.alt); //getter

// All the attributes of all the HTML elements can be manipulated visa getters and setters

// setters is when you change the attribute
// getter is when you request for the attribute info.

// we can also used the getAttribute method for this

// pic.setAttribute('alt', "really cute puppy")
// console.log(pic.getAttribute("alt"));

// The difference between using the method on the element object and using the property .alt on the element object is that
// 1. The method setAttribute can work for non-standard attributes. Non standard attributes are attributes that are created which are customised but the user i.e they are not part of the set attribute for the particular HTML element.

// one way to create custome attribute is to use the keyword "data" i-e data attributes which is seen in the images in the HTML.
// const custom =  document.querySelector(".custom");
// console.log(custom.dataset);

// const check = document.querySelector(".getlux");
// console.log(check);

// console.log(check.dataset);

// check.addEventListener("click", function () {
//     alert(`welcome!! how are you ${check.dataset.name}`);
// });

// console.log(check.alt);
