if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, error => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const notificationBell = document.querySelector(".bell-icon");
    const notificationCount = document.getElementById("notification-count");
    const popup = document.createElement("div");
    popup.id = "popup";
    document.body.appendChild(popup);

    const closePopup = () => {
        popup.style.display = "none";
    };

    notificationBell.addEventListener("click", () => {
        if (popup.style.display === "block") {
            closePopup();
        } else {
            popup.innerHTML = `
                <h2>New Deals</h2>
                <div class="deal">
                    <img src="images/deal1.jpg" alt="Dining Sets Deal">
                    <p>Martin Svensson Dining Sets - $599.99</p>
                </div>
                <div class="deal">
                    <img src="images/deal2.jpg" alt="Hammock Deal">
                    <p>Bliss Hammock with Stand - $99.99</p>
                </div>
                <div class="deal">
                    <img src="images/deal3.jpg" alt="Shine Water Deal">
                    <p>Shine Water - $2.99/case</p>
                </div>
                <div class="deal">
                    <img src="images/deal4.jpg" alt="Garden Planters Deal">
                    <p>Modular Garden Planters - from $4.99</p>
                </div>
                <button class="close-btn">Close</button>
            `;
            popup.style.display = "block";
            document.querySelector(".close-btn").addEventListener("click", closePopup);

            // Hide the notification counter after viewing the deals
            notificationCount.style.display = "none";
        }
    });

    // Initialize Firebase Messaging
    const messaging = firebase.messaging();

    // Request permission to send notifications
    messaging.requestPermission()
        .then(() => {
            console.log('Notification permission granted.');
            // Get the token
            return messaging.getToken();
        })
        .then(token => {
            console.log('FCM Token:', token);
            // You can send this token to your server to send notifications
        })
        .catch(error => {
            console.error('Error getting permission or token:', error);
        });

    // Handle incoming messages
    messaging.onMessage(payload => {
        console.log('Message received:', payload);
        // Customize notification here
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon
        };

        new Notification(notificationTitle, notificationOptions);
    });
});
