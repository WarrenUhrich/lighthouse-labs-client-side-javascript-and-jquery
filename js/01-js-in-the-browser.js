// alert('01-js-in-the-browser.js is loaded!');
console.log('01-js-in-the-browser.js is loaded!');

const html = document.children[0];
console.log('html:', html);

const body = html.children[1];
console.log('body:', body);

const h1 = body.children[0];
const p = body.children[1];
console.log('h1:', h1);
console.log('p:', p);

const htmlString = html.outerHTML;
console.log('htmlString:', htmlString);
