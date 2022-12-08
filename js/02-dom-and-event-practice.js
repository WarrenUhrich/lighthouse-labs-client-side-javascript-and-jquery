// alert('Hello from 02-dom-and-event-practice.js!');

// Grab the form element
const form = document.querySelector('form');

// Grab the input field
const input = document.getElementsByTagName('input')[0];

// Grab the ul
const ul = document.querySelector('ul');

// console.log(form, input, ul);

// handle event for form submit
form.addEventListener('submit', function (event) {
    // (stop default submit to a new page; instead do our stuff!)
    event.preventDefault(); // Please DON'T actually submit
    // console.log(event);
    // const target = event.target; // Who the event happened to.

    // (on submit, add new li to ul)

    // Create an element... (li)
    const li = document.createElement('li');
    console.log(li);

    // get input field text from user
    const userInput = input.value;
    console.log('input.value:', userInput);

    // Add content to it... (input field text that the user entered)
    li.textContent = userInput;

    // Add the new element to the page (ul) so the user can see it!
    ul.appendChild(li); // Add the li to the end of the UL

    // Clear the old input, so the user doesn't have to erase themselves
    input.value = '';
});
