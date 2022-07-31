// Another very common thing in javascrit is creating HTML and inserting them in the DOM. this is way better than creating individual elements and inserting them at various postion. HTML can be created using back-tick(``). as long as the HTML structure is correct, javascript will take the HTMl and insert it in the DOM.

const item = document.querySelector(".item");

// console.log(item.innerHTML)// this is a getter
item.innerHTML = `<h1> how are you doing!</h1>`; // this is the setter.

// The downside to using strings tio set HTML is that the HTML is just a string which means we cannot add anything to the string. it only becomes an element when we dump it to the DOM. then you will have to pull it out of the DOm using the document.querySelector to work with it.

const example = document.querySelector(".item");

// it is also best practise to write out the HTMl in the format it will be in the DOM for better readabilty.
const desc = "cute pup";
const src = `https://picsum.photos/500`;
const myHTML = `
        <div>
            <h2>${desc}</h2>
            <img src = '${src}' alt = '${desc}'/>
        </div>`;
example.innerHTML = myHTML;

// document.body.appendChild(myHTML)
// we can never use myHTML.classList.add(). this will not work. we have to dump the HTML into the Dom first before we can start manipulating the HTML because the myHTML is a string and not an Object until it inserted.
// however there is a work around turning the HTML string into an actual element/DOM obeject by using .createRange(),

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

document.body.append(myFragment);

// however in almost all cases we will be using the innerHTML to append the HTML to the element.
