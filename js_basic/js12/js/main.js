const allImg = document.querySelector('.images-wrapper')
const stopBtn = document.querySelector('.stop')
const continueBtn = document.querySelector('.continue')
let timeChange = 3000

let  current = 0
const getCycleImg = ()=>{
    allImg.children[current].hidden = true
    current++
    if (current === allImg.children.length){
        current = 0
    }
    allImg.children[current].hidden = false
}

let nextImg = timeChange

const createCycle = ()=> {
    return setInterval(()=>{
        nextImg -= 4
        if (nextImg <= 0){
            nextImg = timeChange
            getCycleImg()
        }
    })
}


let interval = createCycle()

stopBtn.addEventListener('click', ()=>{
    clearInterval(interval)
})

continueBtn.addEventListener('click', ()=>{
    interval = createCycle()
})
