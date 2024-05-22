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
        {
            text: "New Martin Svensson Dining Sets available for $599.99!",
            img: "images/deal1.jpg"
        },
        {
            text: "Check out our new Bliss Hammock with Stand for just $99.99!",
            img: "images/deal2.jpg"
        },
        {
            text: "Refreshing Shine Water now just $2.99/case!",
            img: "images/deal3.jpg"
        },
        {
            text: "Modular Garden Planters starting at $4.99!",
            img: "images/deal4.jpg"
        },
        {
            text: "New Deal - Special Offer!",
            img: "images/deal5.jpg"
        }
    ];

    if (notificationList) {
        notifications.forEach(notification => {
            const notificationItem = document.createElement("div");
            notificationItem.classList.add("notification-item");

            const notificationImg = document.createElement("img");
            notificationImg.src = notification.img;
            notificationImg.alt = notification.text;

            const notificationText = document.createElement("p");
            notificationText.textContent = notification.text;

            notificationItem.appendChild(notificationImg);
            notificationItem.appendChild(notificationText);

            notificationList.appendChild(notificationItem);
        });
    }

    // Toggle the navigation menu
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const notificationBell = document.getElementById('bell-icon');
    const popup = document.getElementById('popup');
    const notificationCount = document.getElementById('notification-count');
    const closePopupBtn = document.getElementById('close-btn');

    let unreadNotifications = notifications.length; // Update count based on actual notifications

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    if (notificationBell && popup && notificationCount) {
        notificationBell.addEventListener('click', () => {
            popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'block' : 'none';
            if (popup.style.display === 'block') {
                notificationCount.style.display = 'none';
                unreadNotifications = 0;
            }
        });
    }

    if (closePopupBtn && popup) {
        closePopupBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

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
