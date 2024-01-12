var draggable = document.querySelector("#draggable")
var dropper = document.querySelector("#dropper")

//Arrête l'interdicition de déposer
dropper.addEventListener('dragover', (event) => {
    event.preventDefault()
})
