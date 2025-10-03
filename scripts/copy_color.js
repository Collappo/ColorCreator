
colorValue.addEventListener("click", () => {
    navigator.clipboard.writeText(colorValue.value)
        .then(() => {
            showCopiedNotification("COPIED!", true)
        },
            (error) => {
                showCopiedNotification("COPY ERROR!", false)
            });
})