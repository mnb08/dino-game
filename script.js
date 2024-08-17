const dino = document.querySelector('#dino')
const cactus = document.querySelector('#cactus')
const jumpAudio = new Audio('./sound/jump.wav')

function jump(){
    jumpAudio.play()
    if(dino.className != 'jump'){
        dino.classList.add('jump')
    }
    setTimeout( () => {
        dino.classList.remove('jump')
    }, 300)
}

document.addEventListener('keydown', (e) => {
    if(e.code === 'Space'){
        jump()
    }
})

document.querySelector('button').addEventListener('click', (e) => {
    jump()
})

setInterval( () => {
    const dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue('bottom'))
    const cactusRight = parseInt(getComputedStyle(cactus).getPropertyValue('right'))

    if(dinoBottom < 35 && cactusRight > 530){
        alert("GAME OVER")
        cactus.style.right = '-800px'
    }
}, 30)