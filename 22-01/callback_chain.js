function multiplyBy2(num, callback) {
    callback(num * 2);
}

function subtract3(num, callback) {
    callback(num - 3);
}

function add10(num, callback) {
    callback(num + 10);
}

multiplyBy2(5, (result1) => {
    subtract3(result1, (result2) => {
        add10(result2, (finalResult) => {
            console.log(finalResult);
        });
    });
});