class Employee {
    constructor(name, age, salary) {
        this._name = name
        this._age = age
        this._salary = salary
    }

    get name() {
        return this._name
    }
    set name (value) {
        return this._name = value
    }
    get age() {
        return this._age
    }
    set age(value) {
        return this._age = value
    }
    get salary() {
        return this._salary
    }
    set salary(value) {
        return this._salary = value
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang
    }

    get salary() {
        return (+this._salary * 3)
    }
}

const programmerJunior = new Programmer('Gogi', 25, 2500, 3)
const programmerMiddle = new Programmer('Tom', 30, 5000, 5)

console.log(programmerJunior, programmerMiddle)