const books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }
];

const root = document.querySelector('#root')
const ul = document.createElement('ul')
const propertiesBooks = ['author', 'name', 'price']

books.forEach(item => {
    try {
        propertiesBooks.forEach(elem => {
            if (!item.hasOwnProperty(elem)) {
                throw new Error(`Book ${item.name} dont have ${elem}`)
            }
        })
        for (let elem in item) {
            const li = document.createElement('li')
            li.innerText = `${elem} : ${item[elem]}`
            ul.append(li)
        }
    }
    catch (error) {
        console.log(error)
    }
})

root.append(ul)