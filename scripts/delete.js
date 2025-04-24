const deleteCharacterButton = document.querySelector('.deleteCharacter')

if (deleteCharacterButton) {
    deleteCharacterButton.addEventListener("click", () => {
        deleteCharacter()
    })
}

function deleteCharacter() {
    const stats = document.querySelector('.stats')

    if (stats) {
        stats.innerHTML = ''
    }
}