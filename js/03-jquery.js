console.log('03-jquery.js has loaded!');
console.log('jQuery:', jQuery); // Same as $

// Select our UL
const $ul = $('#to-do-list'); // jQuery still gives us an HTML element back, but with new properties and methods from jQuery

// Select our new to-do form field input
const $newToDoField = $('#new-to-do');

// Select our form
const $form = $('form');

// Set up a listener for our form "submit"
$form.on('submit', (event) => {
    // Prevent the default (don't submit it for real!)
    event.preventDefault();

    // Retrieve user value from form field
    const newToDo = $newToDoField.val(); // with no arg, GIVES US value of our input
                                         // WITH an arg, it SETS the value of our input

    // Create an LI with the info that the user entered
    const li = `<li>${newToDo}</li>`;

    // Add the LI to our UL
    $ul.append(li);

    // Clear our input for easy entry of a new to-do
    $newToDoField.val(''); // Set value to empty string
});
