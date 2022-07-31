const clickMeButton = document.querySelector(".butts");
console.log(clickMeButton);

function clickingButton(event) {
    console.log(" you are clicking me !!!!!!");
    console.log(event.spk);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.path);
}

clickMeButton.addEventListener("click", clickingButton);

// the pertinent question here is how do we know the exact button that is clicked on every click of the different buttons. This information is hidden in the event object.
// The event object which is passed as a parameter to the callback function in the event listener method. The event object contain tons of information about the event taking place and it returns nothing.

// function handleBuyButtonClick(event) {
//     console.log(event.target); // This gave information(attributes) about the element clicked
//     console.log(event.currentTarget);
//     event.stopPropagation();
// }

//stop event from bubling up

//The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant

// buyButtons.forEach(function (buyButton) {
//     buyButton.addEventListener("click", handleBuyButtonClick);
// });

// window.addEventListener("click", function (event) {
//     console.log("you clicked the Window !!");
//     console.log(event.currentTarget); //identifies the element the listening was attached to
//     console.log(event.target); // identifies the element that was clicked
// });

//Event propagation is a mechanism that defines how events propagate or travel through the DOM tree to arrives at its target and what happens to it afterward. In modern browser event propagation proceeds in two phases: capturing, and bubbling phase
// so when we clicked on the window we also clicked on the HTML- body-various element until we reach the inner or nested element that was clicked.

//we can stop the propagation from bublling up use the stoppropagation method.
