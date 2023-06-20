console.log('02-dom-and-event-practice.js is loaded!');

const form = document.querySelector('#to-do-form');
const newToDoInput = document.querySelector('#new-to-do-field');
const toDoListUl = document.querySelector('#to-do-list');

console.log(form, newToDoInput, toDoListUl);

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Disable submission to back-end (stay on this page)

    console.log('Form submit event ran!');

    const newToDoText = newToDoInput.value; // inputs have .value, representing what is typed into the field
    console.log('newToDoText:', newToDoText);

    const li = document.createElement('li');
    li.textContent = newToDoText;

    toDoListUl.appendChild(li);

    newToDoInput.value = '';
});
