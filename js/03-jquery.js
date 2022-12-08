// jQuery();
// jQuery = $;

// Grab our form; input; ul
const $form = $('form');
const $input = $('#new-to-do');
const $ul = $('ul');

// Add an event listener for FORM SUBMIT
$form.on('submit', function(event) {
    event.preventDefault();

    // Add INPUT value to LI
    const li = '<li>' + $input.val() + '</li>';

    // Add LI to the UL
    $ul.append(li);
    // $ul.html(li);

    // Clear input
    $input.val('');
});
