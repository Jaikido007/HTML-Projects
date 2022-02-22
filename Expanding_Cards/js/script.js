const panels = document.querySelectorAll('.panel') // All makes node list (array) otherwise it would choose 1st panel only [0]!

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses() // declaring function yet to be written
        panel.classList.add('active') // A list of the classes - now I can add methods ie add/remove
    })
})
//function written here:
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}