const color = document.getElementById("color")
const rangeInput = document.querySelectorAll(".input-range")
const valueInput = document.querySelectorAll(".input-value")
const colorValue = document.getElementById("color-value")

let hex

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

function HexToRGB(hexColor) {
    hexColor = hexColor.slice(1)
    let red = hexColor.substr(0, 2)
    let green = hexColor.substr(2, 2)
    let blue = hexColor.substr(4, 2)
    return [parseInt(red, 16).toString(), parseInt(green, 16).toString(), parseInt(blue, 16).toString()]
}

rangeInput.forEach((e, i) => {
    e.value = "255"
    valueInput[i].value = "255"
    e.addEventListener("input", () => {
        valueInput[i].value = e.value
        hex = RGBToHex(parseInt(rangeInput[0].value), parseInt(rangeInput[1].value), parseInt(rangeInput[2].value))
        color.style.background = hex
        colorValue.value = hex
    })

    valueInput[i].addEventListener("input", () => {
        e.value = valueInput[i].value
        hex = RGBToHex(parseInt(valueInput[0].value), parseInt(valueInput[1].value), parseInt(valueInput[2].value))
        color.style.background = hex
        colorValue.value = hex
    })
})


colorValue.value = RGBToHex(parseInt(valueInput[0].value), parseInt(valueInput[1].value), parseInt(valueInput[2].value))

colorValue.addEventListener("input", () => {
    color.style.background = colorValue.value
    valueInput[0].value = HexToRGB(colorValue.value)[0]
    valueInput[1].value = HexToRGB(colorValue.value)[1]
    valueInput[2].value = HexToRGB(colorValue.value)[2]

    rangeInput[0].value = HexToRGB(colorValue.value)[0]
    rangeInput[1].value = HexToRGB(colorValue.value)[1]
    rangeInput[2].value = HexToRGB(colorValue.value)[2]

})