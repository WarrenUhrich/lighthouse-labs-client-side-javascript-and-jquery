console.log('03-jquery-practice.js is loaded!');

console.log('$:', $);

// Grab the elements we need for our to-do list.
const $form = $('#to-do-form'); // jQuery('#to-do-form')
const $input = $('#new-to-do');
const $list = $('#to-do-list');

// Set up an event for the form submitting.
$form.on('submit', (event) => {
    event.preventDefault();

    // Get text from our <input>
    const newToDo = $input.val(); // Empty means RETRIEVE value.
                                  // Passing a value in will SET the value.

    // Create a new list item element.
    const $li = $(`<li>${newToDo}</li>`);

    // Add the list item to our <ul>
    $list.append($li);

    // Clear the <input>
    $input.val(''); // SET to empty string.
});

