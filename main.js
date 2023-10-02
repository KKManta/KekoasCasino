const socket = new WebSocket('https://kkmanta.github.io/KekoasCasino/')
console.log("Starting server.");

// Handle incoming WebSocket connections
server.on('connection', (ws) => {
    console.log('New connection established.');

    // You can add logic here to handle messages from this client
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    // Handle disconnections
    ws.on('close', () => {
        console.log('Connection closed.');
    });
});