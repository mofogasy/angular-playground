import _ from 'lodash';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    setTimeout(() => console.log('Arrow function call works!'));

    return element;
}

document.body.appendChild(component());