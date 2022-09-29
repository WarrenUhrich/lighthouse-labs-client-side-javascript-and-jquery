
// EXAMPLE: How to get the SECOND label?
// const labels = document.querySelectorAll('label');
// const labels = document.querySelector('label:nth-of-type(2)');
// console.log(labels[1]);

const form = document.querySelector('form');
console.log(form);

// const inputs = document.querySelectorAll('input');
// const categoryInput = inputs[0];
// const newTaskInput = inputs[1];

const categoryInput = document.querySelector('#category');
console.log(categoryInput);
console.log(categoryInput.value);
categoryInput.value = '';
const taskInput = document.querySelector('#new-task');
console.log(taskInput);
console.log(taskInput.value);
taskInput.value = '';



form.addEventListener('submit', (event) => {

    event.preventDefault(); // Please don't ACTUALLY submit...
    // event.target (which element is this event happening to?)
    // Actual submissions load a new page; submit to back-end...

    const category = categoryInput.value;
    const newTask = taskInput.value;

    // Create element in memory.
    const li = document.createElement('li');
    // <li>CATEGORY_NAME: NEW_TASK</li>

    // Populate element content.
    li.textContent = `${category}: ${newTask}`;

    // Add element to the page.
    const taskListElement = document.querySelector('#to-do-list');
    taskListElement.appendChild(li);

    // Clear the fields, so the user can enter new info.
    categoryInput.value = '';
    taskInput.value = '';
});
