// console.log(jQuery);

// $ = jQuery

// const categoryInput = document.querySelector();
const $categoryInput = jQuery('#category');
const $newTaskInput = $('#new-task');
const $toDoList = $('#to-do-list');
const $form = $('form');

// $('body').on('click', 'li', (event) => {
//     console.log(event.target);
// });

$form.on('submit', (event) => {

    // Stop browser from refreshing / going to a new page on submit.
    event.preventDefault();

    const category = $categoryInput.val();
    const newTask = $newTaskInput.val();

    const newLi = `<li>${category}: ${newTask}</li>`;

    // Add new LI to list of all LIs
    const allLis = $toDoList.html() + newLi;

    $toDoList.html(allLis);
});
