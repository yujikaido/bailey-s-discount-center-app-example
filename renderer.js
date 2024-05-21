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
    const popup = document.createElement("div");
    popup.id = "popup";
    document.body.appendChild(popup);

    const closePopup = () => {
        popup.style.display = "none";
    };

    notificationBell.addEventListener("click", () => {
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
    });

    const notificationList = document.getElementById("notification-list");
    if (notificationList) {
        const notifications = [
            "New Martin Svensson Dining Sets available for $599.99!",
            "Check out our new Bliss Hammock with Stand for just $99.99!",
            "Refreshing Shine Water now just $2.99/case!",
            "Modular Garden Planters starting at $4.99!"
        ];

        notifications.forEach(notification => {
            const notificationItem = document.createElement("div");
            notificationItem.classList.add("notification-item");
            notificationItem.textContent = notification;
            notificationList.appendChild(notificationItem);
        });
    }
});
