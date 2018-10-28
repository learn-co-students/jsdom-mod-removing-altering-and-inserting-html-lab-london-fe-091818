/* Enter the code to remove the main node element under this comment */

// .remove('main')
// getElementById('main').remove()
console.log(document.getElementById('main'))
document.getElementById('main').remove()

/* Create your new element here and assign it to newHeader */

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerText = 'Kat is the champion!';
document.body.appendChild(newHeader);
