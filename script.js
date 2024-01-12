var draggable = document.querySelector("#draggable")
var dropper = document.querySelector("#dropper")

//Arrête l'interdiction de déposer
dropper.addEventListener('dragover', (event) => {
    event.preventDefault()
})

//On veut transformer la couleur en blanc quand on survole la zone
dropper.addEventListener('dragenter', (event) => {
    dropper.style.backgroundColor = 'white'
})

//La couleur redevient bleue quand on ne survole plus la zone
dropper.addEventListener('dragleave', (event) => {
    dropper.style.backgroundColor = 'dodgerblue'
})
//Pour envoyer les données dragged
draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', draggable.innerHTML)
})
//Pour recevoir les données envoyées dans le dropper
dropper.addEventListener('drop', (event) => {
    const data = event.dataTransfer.getData('text/plain')
    dropper.innerHTML = `${data}  ${dropper.innerHTML}`
    dropper.style.backgroundColor = 'dodgerblue'
})