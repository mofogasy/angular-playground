// The two are equivalent
// onmessage = (event) => console.log('Worker received some message', event.data);
addEventListener('message', (event) => console.log('Worker received some message', event.data));

setInterval(() => postMessage(Math.floor(Math.random() * 10000000)), 200);