const generatePassword = (firstName, lastName, birthday) =>
    firstName[0].toUpperCase() + lastName.toLowerCase() + birthday.slice(6,10);

function createNewUser() {
    const firstName = prompt('Enter your name.');
    const lastName = prompt('Enter your last name.');
    const birthday = prompt('Enter your date', "dd.mm.yyyy");

    const newUser = {
        firstName,
        lastName,
        birthday,
        getLogin: function () {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        getPassword: function() {
            const { firstName, lastName, birthday } = this;
            return generatePassword(firstName, lastName, birthday)
        },
        getAge: function(){
            let now = new Date();
            let currentYear = now.getFullYear();
            const [userDay, userMouth, userYear] = this.birthday.split('.')
            let userBirth = new Date(+userYear, +userMouth-1, +userDay);
            let userBirthInCurrentYear = new Date (now.getFullYear(),userBirth.getMonth(), userBirth.getDate());
            let age = currentYear-(+userYear);
            if(now < userBirthInCurrentYear){
                age = currentYear-(+userYear) - 1;
            }
            return(age)
        }
    }

    console.log (newUser)
    console.log(`Login : ${newUser.getLogin()}`)
    console.log(`Age : ${newUser.getAge()}`)
    console.log(`Password : ${newUser.getPassword()}`)
}

createNewUser()