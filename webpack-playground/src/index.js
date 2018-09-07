import _ from 'lodash';
import someText from './texts/some.txt';
import './style.css';
import Sifaka from './jumping_sifaka.jpg';
import printMe from './print';

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello-class');
    setTimeout(() => console.log('Arrow function call works!'));
    return element;
}

function text() {
    let element = document.createElement('div');
    element.innerHTML = someText;
    console.log(someText);
    return element;
}

function image() {
    let image = new Image();
    image.src = Sifaka;
    return image;
}

function button() {
    let button = document.createElement('button');
    button.innerHTML = 'Print me';
    button.onclick = printMe;
    return button;
}

document.body.appendChild(component());
document.body.appendChild(text());
document.body.appendChild(image());
document.body.appendChild(button());
