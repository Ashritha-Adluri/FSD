function authUser(user, cb) {
    console.log("Authenticating user...");
    setTimeout(() => {
        cb(null, true);
    }, 1000);
}

function verifyPayMethod(payDetails, cb) {
    console.log("Verifying payment method...");
    setTimeout(() => {
        cb(null, true);
    }, 1000);
}

function processPay(amount, cb) {
    console.log("Processing payment...");
    setTimeout(() => {
        cb(null, true);
    }, 1000);
}

function updateBalance(user, amount, cb) {
    console.log("Updating account balance...");
    setTimeout(() => {
        cb(null, "Balance updated");
    }, 1000);
}

function notify(email, msg, cb) {
    console.log("Sending email notification...");
    setTimeout(() => {
        cb(null, "Notification sent");
    }, 1000);
}

authUser("user123", (err, authRes) => {
    if (err || !authRes) {
        return console.log("Authentication failed");
    }

    verifyPayMethod("cc-123", (err, payValid) => {
        if (err || !payValid) {
            return console.log("Invalid payment method");
        }

        processPay(100, (err, payDone) => {
            if (err || !payDone) {
                return console.log("Payment failed");
            }

            updateBalance("user123", 100, (err, balUpdate) => {
                if (err) {
                    return console.log("Failed to update balance");
                }

                notify("user@example.com", "Payment successful", (err, notifRes) => {
                    if (err) {
                        return console.log("Failed to send notification");
                    }
                    console.log("Payment processing complete");
                });
            });
        });
    });
});
