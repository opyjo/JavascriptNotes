// Make a div

const myDiv = document.createElement("div");
console.log(myDiv);
// add a class of wrapper to it
myDiv.classList.add("wrapper");
// put it into the body

document.body.append(myDiv);
// make an unordered list
 const myList = document.createElement("ul");
// add three list items with the words "one, two three" in them
const myList1 = document.createElement('li')
const myList2 = document.createElement('li')
const myList3 = document.createElement('li')

myList1.textContent = "one";
myList2.textContent = "two";
myList3.textContent = "three";


myList.insertAdjacentElement("afterbegin", myList1);
myList1.insertAdjacentElement("afterbegin", myList2);
myList2.insertAdjacentElement("afterbegin", myList3);

// put that list into the above wrapper
myDiv.append(myList)
// create an image
 const myImg = document.createElement("img");
// set the source to an image
myImg.src = "https://picsum.photos/500"
// set the width to 250
myImg.width = 250;
myImg.height = 250;
// add a class of cute
myImg.classList.add("cute")
// add an alt of Cute Puppy
myImg.alt = "Cute puppy"
// Append that image to the wrapper
myDiv.append(myImg);    
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
    <div class = 'myDiv2'>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`
myList.insertAdjacentHTML("beforebegin",myHTML)

// add a class to the second paragraph called warning
 const myDiv2 = document.querySelector(".myDiv2")
 secondParagraph = myDiv2.children[1];
secondParagraph.classList.add("warning");
 
// remove the first paragraph
const firstParagraph = myDiv2.children[0];
firstParagraph.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayercard(name,age,height){
    const fHTMl = `<div class="playerCard">
                <h2>${name} — ${age}</h2>
                <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            </div>`;
    return fHTMl;
};
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const cards  = document.createElement("div");
cards.classList.add("cards");

// Have that function make 4 cards


// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener