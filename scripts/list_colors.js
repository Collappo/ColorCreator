const colorsList = document.getElementById("colors-list")

function createColorPanel(colorValue) {
    if (!colorValue) return;
    let colorPanel = document.createElement("div")
    let colorPanelLogo = document.createElement("div")
    let colorPanelValue = document.createElement("p")
    let colorPanelRemover = document.createElement("button")

    colorPanel.classList.add("saved-color-panel")
    colorPanelLogo.classList.add("saved-color-logo")
    colorPanelValue.classList.add("saved-color-value")
    colorPanelRemover.classList.add("material-symbols-outlined")
    colorPanelRemover.classList.add("saved-color-panel-remover")

    colorPanelLogo.style.background = colorValue
    colorPanelValue.innerText = colorValue
    colorPanelRemover.innerHTML = "&#xe872"
    // colorPanelRemover.style.color = "#ffffff"

    colorPanel.appendChild(colorPanelLogo)
    colorPanel.appendChild(colorPanelValue)
    colorPanel.appendChild(colorPanelRemover)
    colorsList.appendChild(colorPanel)
}

function listColors() {
    colorsList.innerHTML = ""
    let colorsAmount = parseInt(localStorage.getItem("amount-of-colors"))
    let colors = []
    for (let i = 0; i < colorsAmount; i++) {
        colors.push(localStorage.getItem("color-" + i))
    }
    colors.forEach((e) => {
        createColorPanel(e)
    })
}