
colorValue.addEventListener("click", () => {
    navigator.clipboard.writeText(colorValue.value)
        .then(() => {
            showNotification("Copied!", true)
        },
            (error) => {
                showNotification("Copy error!", false)
            });
})