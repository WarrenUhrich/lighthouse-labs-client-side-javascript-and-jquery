console.log('01-js-in-the-browser is loaded!');
// alert('01-js-in-the-browser is loaded!');

console.log('document.title:', document.title);
document.title = 'JS in the Browser! (Updated with JS!)';

// document.addEventListener('load')

console.log('h1:', document.querySelector('h1'));

const myH1 = document.querySelector('h1');
myH1.textContent = '01-js-in-the-browser';
