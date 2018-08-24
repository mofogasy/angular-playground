addEventListener('message', (message) => postMessage('Pingpong ' + message.data));

setInterval(() => console.log('Still working...'), 5000);

setInterval(() => alert('This will throw an error...'), 5000);
