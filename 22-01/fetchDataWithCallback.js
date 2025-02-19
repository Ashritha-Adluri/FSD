function fetchDataWithCallback(url, callback) {
    const fakeData = { data: "Sample data from " + url };
    const error = Math.random() > 0.5 ? null : "Error fetching data";

    setTimeout(() => {
        if (error) {
            callback(error, null);
        } else {
            callback(null,fakeData);
        }
    }, 2000);
}

fetchDataWithCallback("example.com", (error, data) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Data:", data);
    }
});