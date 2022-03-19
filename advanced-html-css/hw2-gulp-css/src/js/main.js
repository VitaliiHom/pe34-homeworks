const menuBtn = document.querySelector('.header__btn')
const list = document.querySelector('.header__navigation-list')
const svgMain = document.querySelector('.svg-main')

menuBtn.addEventListener('click', ()=>{
    if (svgMain.style.display === 'block'){
        list.style.display = 'flex'
        svgMain.style.display = 'none'
    } else {
        list.style.display = 'none'
        svgMain.style.display = 'block'
    }

})