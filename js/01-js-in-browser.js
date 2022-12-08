//alert('01-js-in-browser.js is loaded!');

// Everything in our event callback runs only once DOM is 100% loaded.
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });

console.log('Hello from 01-js-in-browser.js!');

// const htmlElement = document.children[0];
// console.log('htmlElement', htmlElement);

// const head = htmlElement.children[0];
// console.log('head', head);

// const body = htmlElement.children[1];
// console.log('body', body);

// console.log('children in body:', body.children);

// const LIs = document.getElementsByTagName('li');
// console.log('LIs:', LIs);

// querySelector follows the same syntax as CSS selectors
// const h2 = document.querySelector('h2');
// console.log('h2:', h2);

const headingAndTitle = document.querySelectorAll('title,h1');
console.log('headingAndTitle:', headingAndTitle);

for (const element of headingAndTitle) {
    // console.log(element);
    console.log('content:', element.textContent);
    element.textContent = 'DOM Practice in the Browser';
}
