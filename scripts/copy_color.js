colorValue.addEventListener("click", () => {
    navigator.clipboard.writeText(colorValue.value)
        .then(() => {
            showNotification("COPIED!", true, colorValue)
        },
            (error) => {
                showNotification("COPY ERROR!", false, colorValue)
            });
})