function createNewUser() {
    let firstName = prompt('Enter your name')
    let lastName = prompt('Enter last name')
    
    return {
        firstName,
        lastName,
        getLogin: function () {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
        }
    }
}

let newUser = createNewUser();
console.log(newUser.getLogin())