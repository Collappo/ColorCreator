const notificationBox = document.getElementById("notification-box")
const notificationIcon = document.getElementById("notification-icon")
const notificationText = document.getElementById("notification-text")
notificationBox.style.top = document.getElementById("color-value").offsetTop + "px"

function createNotification(parent) {
    let newNotificationBox = document.createElement("div")
    let newNotificationIcon = document.createElement("span")
    let newNotificationText = document.createElement("p")

    newNotificationBox.classList.add("notification-box")
    newNotificationIcon.classList.add("notification-icon")
    newNotificationIcon.classList.add("material-symbols-outlined")
    newNotificationText.classList.add("notification-text")

    newNotificationBox.appendChild(newNotificationIcon)
    newNotificationBox.appendChild(newNotificationText)
    parent.appendChild(newNotificationBox)
    return newNotificationBox
}


function showNotification(text, is_good_info, pinned_element) {
    let element = createNotification(pinned_element.parentElement)
    element.style.transform = ""
    element.style.top = pinned_element.offsetTop + "px"
    if (is_good_info) {
        element.style.background = "#22ff7a";
        element.children[0].innerHTML = "&#xe877"
    }
    else {
        element.style.background = "#ff2f6a";
        element.children[0].innerHTML = "&#xe5c9"
    }
    element.children[1].innerText = text

    element.style.transform = "500ms cubic-bezier(0.42, 1.28, 0.65, 1)"

    element.style.opacity = "1"
    element.style.top = pinned_element.offsetTop + pinned_element.offsetHeight + 10 + "px"

    setTimeout(() => {
        element.style.top = pinned_element.offsetTop + "px"
        element.style.opacity = "0"
    }, 2000)

    setTimeout(() => element.remove(), 2500)
}
