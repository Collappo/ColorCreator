const saveButton = document.getElementById("save-color-value")

saveButton.addEventListener("click", () => {
    let amountOfColors = parseInt(localStorage.getItem("amount-of-colors"))
    let colorToSave = colorValue.value
    let flag = false
    for (let i = 0; i <= amountOfColors; i++) {
        if (localStorage.getItem("color-" + i) === colorToSave) {
            flag = true
            break
        }
    }
    if (!flag) {
        localStorage.setItem(`color-${amountOfColors}`, colorToSave)
        localStorage.setItem("amount-of-colors", (amountOfColors + 1).toString())
        refreshColorsList()
        showNotification("SAVED!", true, saveButton)
    }

    else {
        showNotification("Color can't be saved!", false, saveButton)
    }
})