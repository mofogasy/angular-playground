import _ from 'lodash';
import someText from './texts/some.txt';
import './style.css';
import Sifaka from './jumping_sifaka.jpg';

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

document.body.appendChild(component());
document.body.appendChild(text());
document.body.appendChild(image());