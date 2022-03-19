const form = document.createElement('form')
form.className = 'form'

const input = document.createElement('input')
input.className = 'input'
input.type = 'number'

const label =document.createElement('label')
label.innerText = 'Price'

form.append(input)
document.body.append(form)
input.before(label)

let button =document.createElement('button')
button.innerText = 'X'
button.className = 'button'

let spanInput = document.createElement('span')
spanInput.className = 'span_input'

let spanError = document.createElement('span')
spanError.innerText = 'Please enter correct price'
spanError.className = 'span_error'

input.addEventListener('focus', ()=> input.classList.add('focus'))

input.addEventListener('blur', ()=>{
    input.classList.remove('focus')
    spanError.remove()

    if (input.value !== ''){
        spanInput.innerText = `NOW PRICE ${input.value}`
        spanInput.append(button)
        form.before(spanInput)
        input.style.borderColor = ''
        input.style.background = '#3CB878'
    }

    if (input.value < 0) {
        input.style.borderColor = 'red'
        input.style.background = ''
        spanInput.remove()
        form.after(spanError)
    }
})

button.addEventListener('click', ()=>{
    spanInput.remove()
    input.value = ''
    input.style.background = ''
})