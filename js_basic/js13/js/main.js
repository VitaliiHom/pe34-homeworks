const linkTheme = document.querySelector('#theme-link')
const themeBtn = document.querySelector('.change-theme')

if (localStorage.getItem('theme')  === 'dark'){
    linkTheme.setAttribute('href', 'style/dark.css')
} else if (localStorage.getItem('theme')  === 'light'){
    linkTheme.setAttribute('href', 'style/light.css')
}


function changeTheme() {
    const lightTheme = "style/light.css"
    const darkTheme = "style/dark.css"

    let current = linkTheme.getAttribute('href')

    if (current === lightTheme){
        current = darkTheme
        window.localStorage.setItem('theme', 'dark')
    } else {
        current = lightTheme
        window.localStorage.setItem('theme', 'light')
    }

    linkTheme.setAttribute('href', current)
}

themeBtn.addEventListener('click', changeTheme)
