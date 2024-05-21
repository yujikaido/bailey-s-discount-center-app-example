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
});
