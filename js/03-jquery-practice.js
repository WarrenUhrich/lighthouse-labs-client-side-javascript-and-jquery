console.log('03-jquery-practice.js is loaded!');
console.log('jQuery:', jQuery);

console.log('Is jQuery === $ ???', jQuery === $);

const $form = $('#to-do-form'); // document.querySelector()
const $input = $('#new-to-do-field');
const $ul = $('#to-do-list');

$form.on('submit', (event) => {
    event.preventDefault();

    const newToDo = $input.val(); // If we pass nothing, we GET the value
    const $li = $(`<li>${newToDo}</li>`);

    $ul.append($li);
    $input.val(''); // If we pass something, we SET the value
});
