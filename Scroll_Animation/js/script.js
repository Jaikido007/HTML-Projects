const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes) /* checkBoxes is checking position of each box*/

checkBoxes() /* running checkBoxes */

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4 /* innerHeight - current height of webpage - can't used fixed number as it depends on user screen, so some math to work on any size screen */

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top /* checkBoxes is checking position of each box */

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}