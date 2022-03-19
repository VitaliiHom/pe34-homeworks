const buttons = document.querySelectorAll('.btn')

function btnPress(e) {
    buttons.forEach(item =>{
        if (item.classList.contains('active_btn')){
            item.classList.remove('active_btn')
        } if (item.innerText.toLocaleLowerCase() === e.key.toLocaleLowerCase()){
            item.classList.add('active_btn')
        }
    })
}

document.body.addEventListener('keypress', btnPress)