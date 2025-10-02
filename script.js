const color = document.getElementById("color")
const rangeInput = document.querySelectorAll(".input-range")
const valueInput = document.querySelectorAll(".input-value")

function RGBToHex(red, green, blue) {
    red = red.toString(16)
    red = (red.length === 1) ? "0" + red : red
    green = green.toString(16)
    green = (green.length === 1) ? "0" + green : green
    blue = blue.toString(16)
    blue = (blue.length === 1) ? blue = "0" + blue : blue
    let hex = `#${red}${green}${blue}`
    return hex
}

rangeInput.forEach((e, i) => {
    e.value = "255"
    valueInput[i].value = "255"
    e.addEventListener("input", () => {
        valueInput[i].value = e.value
        color.style.background = RGBToHex(parseInt(rangeInput[0].value), parseInt(rangeInput[1].value), parseInt(rangeInput[2].value))
    })

    valueInput[i].addEventListener("input", () => {
        e.value = valueInput[i].value
        color.style.background = RGBToHex(parseInt(valueInput[0].value), parseInt(valueInput[1].value), parseInt(valueInput[2].value))
    })
})

