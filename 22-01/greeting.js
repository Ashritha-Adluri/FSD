function greet(name, callback) {
    const message = `Hello, ${name}!`;
    return callback(message);
}

function displayMessage(msg) {
    console.log(msg);
}

greet("Alice", displayMessage);
