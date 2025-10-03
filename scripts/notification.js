const notificationBox = document.getElementById("notification-box")
const notificationIcon = document.getElementById("notification-icon")
const notificationText = document.getElementById("notification-text")
notificationBox.style.top = document.getElementById("color-value").offsetTop + "px"

function showCopiedNotification(text, is_good_info) {
    notificationBox.style.transform = ""
    if (is_good_info) {
        notificationBox.style.background = "#22ff7a";
        notificationIcon.innerHTML = "&#xe877"
    }
    else {
        notificationBox.style.background = "#ff2f6a";
        notificationIcon.innerHTML = "&#xe5c9"
    }
    notificationText.innerText = text

    notificationBox.style.transform = "500ms cubic-bezier(0.42, 1.28, 0.65, 1)"

    notificationBox.style.opacity = "1"
    notificationBox.style.top = document.getElementById("color-value").offsetTop + 70 + "px"

    setTimeout(() => {
        notificationBox.style.top = document.getElementById("color-value").offsetTop + "px"
        notificationBox.style.opacity = "0"
    }, 2000)
}