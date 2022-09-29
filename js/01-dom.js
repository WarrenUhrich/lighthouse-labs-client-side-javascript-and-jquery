console.log('Before title:', document.title);
document.title = 'This is a new Title! Check the JS.';
console.log('After title:', document.title);

console.log('Document body:', document.body);

console.log('H1', document.querySelector('h1'));

const myH1 = document.querySelector('h1');

console.log(myH1.textContent);
myH1.textContent = 'Hello, World!';
