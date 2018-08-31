import _ from 'lodash';
import someText from './texts/some.txt';

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    setTimeout(() => console.log('Arrow function call works!'));
    return element;
}

function text() {
    let element = document.createElement('div');
    element.innerHTML = someText;
    console.log(someText);
    return element;
}

document.body.appendChild(component());
document.body.appendChild(text());