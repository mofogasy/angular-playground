onmessage = function(event) {
    console.log('Worker received some message', event.data);
};

setInterval(() => postMessage(Math.floor(Math.random() * 10000000)), 200);