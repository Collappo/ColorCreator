function removeColorPanelAndSavedValue() {
    let colorValueToRemove = this.parentElement.children[1].innerText

    for (let i = 0; i < parseInt(localStorage.getItem("amount-of-colors")); i++) {
        if (localStorage.getItem("color-" + i.toString()) === colorValueToRemove) {
            localStorage.removeItem("color-" + i.toString())
        }
        break
    }

    listColors()
}
function addRemoveColorPanelEvents() {
    let colorPanelsRemovers = document.querySelectorAll(".saved-color-panel-remover")

    colorPanelsRemovers.forEach((e) => {
        e.addEventListener("click", removeColorPanelAndSavedValue)
    })
}