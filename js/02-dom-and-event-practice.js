console.log('02-dom-and-event-practice.js is loaded!');

// We want our elements...
const form = document.querySelector('#to-do-form'); // <form>
const input = document.querySelector('#new-to-do'); // <input>
const list = document.querySelector('#to-do-list'); // <ul>

// How do we know when the form submits?
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stops form from doing default submission.
    // We want to do this here, so that our browser doesn't make a new request for a new page.

    console.log('The form submitted!');

    // What is the text for the new to-do?
    const newToDoText = input.value;
    console.log('Current <input> text:', newToDoText);

    const newLI = document.createElement('li');
    newLI.textContent = newToDoText;
    // newLI.innerHTML = '<p>abc</p>'; // innerHTML parses HTML! textContent is safer.
    console.log('newLI', newLI);

    // Now we want to SHOW our LI to the user!
    // We need to add it to the actual page.
    // list.prepend(newLI);
    list.append(newLI);

    // Clear the value of the <input>!
    input.value = '';
});
