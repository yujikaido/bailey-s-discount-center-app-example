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
    const notificationList = document.getElementById("notification-list");

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

    // Toggle the navigation menu
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const notificationBell = document.getElementById('bell-icon');
    const popup = document.getElementById('popup');
    const notificationCount = document.getElementById('notification-count');
    const closePopupBtn = document.getElementById('close-btn');

    let unreadNotifications = 4; // Example count

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    notificationBell.addEventListener('click', () => {
        popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'block' : 'none';
        if (popup.style.display === 'block') {
            notificationCount.style.display = 'none';
            unreadNotifications = 0;
        }
    });

    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Update the notification count
    function updateNotificationCount() {
        if (unreadNotifications > 0) {
            notificationCount.textContent = unreadNotifications;
            notificationCount.style.display = 'block';
        } else {
            notificationCount.style.display = 'none';
        }
    }

    updateNotificationCount();
});
