//The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.

// There are majorly two use cases for the preventDefault method
// 1.The first is used on links and shows how we prevent the default on clicking a link to another page if we want the user to confirm before proceeding to the next page.

// The default method is also often when you want to bypass the actual functionality of an element and want the element to do something else.

const wes = document.querySelector(".wes");
console.log(wes)
wes.addEventListener("click",function(event){
    event.preventDefault();// here the defaul which is to change the link willnot happen because we have called on the prevent default method.
    console.log("you clicked it!")
    const shouldChangePage = confirm(" This site might be malicious, Do you want to Proceed?");
    if(shouldChangePage){
        window.location =  event.currentTarget.href;
    }
});
//2. we can also prevent the default behaviour of a form submission. forms when submitted ususally cause a refresh of the page. we can also prevent this using the same method.

const signUpForm = document.querySelector("[name='signup']");

signUpForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event.currentTarget.name.value);//this are ways to grab the form inputs.
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked);
});
