// alert('01-js-in-the-browser.js is loaded!');
console.log('01-js-in-the-browser.js is loaded!');

console.log('document title:', document.title);
document.title = 'Our Browser JS Changed This Title!';

// How do we target HTML and change the element's text? Example) <H1>

// document.addEventListener('DOMContentLoaded', () => {
//     const myH1 = document.querySelector('h1');
//     console.log('myH1:', myH1);
// });

const myH1 = document.querySelector('h1');
console.log('myH1:', myH1);

myH1.textContent = 'October 16 Day Was Here 😜';

myH1.style.color = 'orange';

const myH1Parent = myH1.parentElement; // Ah, this is <body>!
console.log('myH1Parent:', myH1Parent);

debugger; // Stops code! Let's you examine the current scope, etc.

// What if I want all children in the <body>?
const bodyChildren = myH1Parent.children;
console.log('bodyChildren:', bodyChildren);
