function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        if (callback) {
            callback();
        }
    }, delay);
}

delayedMessage("Ashritha",4000, () => {
    console.log("Hello ");
});

