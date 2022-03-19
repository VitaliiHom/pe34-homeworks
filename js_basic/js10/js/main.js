const submitButton = document.querySelector('.btn')
const passwordInput = document.querySelector('.password-enter')
const confirmInput = document.querySelector('.password-confirm')
const passwordIcon = document.querySelector('.fas.first.fa-eye.icon-password')
const confirmIcon = document.querySelector('.fas.second.fa-eye.icon-password')

const error = document.createElement('span');
error.className = 'error';

const errors = {
    empty: 'Значения не могут быть пустыми',
    notEqual: 'Нужно ввести одинаковые значения',
};

const isEmpty = pass => pass.value.trim() === '';
const comparePasswords = (pass, confirmPass) => pass.value === confirmPass.value;
const putInputMask = input => {
    input.type = 'password'
    input.classList.replace('fa-eye-slash', 'fa-eye')
};
const removeInputMask = input => {
    input.type = 'text'
    input.classList.replace('fa-eye', 'fa-eye-slash')
};
const setError = errorText => {
    error.innerText = errorText;
    confirmInput.after(error);
};
const resetForm = () => {
    error.innerText = '';
    passwordInput.value = '';
    confirmInput.value = '';
};

passwordIcon.addEventListener('click', ()=>{
    if (passwordInput.type === 'password'){
        removeInputMask(passwordInput);
    } else {
        putInputMask(passwordInput);
    }
});

confirmIcon.addEventListener('click', ()=>{
    if (confirmInput.type === 'password'){
        removeInputMask(confirmInput);
    } else {
        putInputMask(confirmInput);
    }
});

submitButton.addEventListener('click', ()=>{
    let isError = false;

    if (!isError && (isEmpty(passwordInput) || isEmpty(confirmInput))){
        isError = true;
        setError(errors.empty);
    }
    if (!isError && !comparePasswords(passwordInput, confirmInput)) {
        isError = true;
        setError(errors.notEqual);
    }
    if (!isError) {
        alert('You are welcome');
        resetForm();
    }
});