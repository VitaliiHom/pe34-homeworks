const root = document.body.querySelector('#root');
const timerNode = document.body.querySelector('#timer');
let intervalCount = 3;

const convertToString = arr =>
    arr.join(' ');

const renderList = (listArray, root) => {
    const generateList = arr => arr.map(item => {
        if (Array.isArray(item)) {
            return `<ul>${convertToString(generateList(item))}</ul>`
        } else {
            return `<li>${item}</li>`
        }
    })
    root.insertAdjacentHTML('beforeend', convertToString(generateList(listArray)));
}

const list = ["Kharkiv", "Kiev", ["Borispol", ["Uman", "Dnister"], "Irpin"], "Odessa", "Lviv", "Dnieper"];

renderList(list, root);

const interval = setInterval(() => {
    if (intervalCount === -1) {
        clearInterval(interval)
        root.remove();
        timerNode.remove();
    } else {
        timerNode.innerHTML = `${intervalCount}`;
        intervalCount--
    }
}, 1000)