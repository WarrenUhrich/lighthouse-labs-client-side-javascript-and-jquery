// alert('02-dom-and-event-practice.js is loaded!');
console.log('02-dom-and-event-practice.js is loaded!');

const ul = document.querySelector('#to-do-list');
console.log('ul:', ul);

const newToDoField = document.querySelector('#new-to-do');
console.log('newToDoField:', newToDoField);

const form = document.querySelector('form');
console.log('form:', form);

form.addEventListener('submit', (event) => {
    event.preventDefault(); // don't submit the form to a new page

    // Read input from form field
    const newToDo = newToDoField.value; // Value is what is entered in our input element
    console.log('newToDo:', newToDo);

    // Create new LI element
    const li = document.createElement('li'); // Our element is created in memory (not yet added to the page.)

    // Add text to LI element
    li.textContent = newToDo; // Add text to our element.
    
    // Glue LI to our existing UL element
    ul.appendChild(li); // Add LI into the UL
    // append means "at the end of the current content"
    // prepend means "at the beginning of the current content"

    newToDoField.value = ''; // Clear out the old value, easier to add a next to-do
});
// form.addEventListener('mouseEnter');
// form.addEventListener('click');
