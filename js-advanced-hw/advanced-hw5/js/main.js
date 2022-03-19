// const postsUrl = 'https://ajax.test-danit.com/api/json/posts';
//
// class Card {
//     constructor( title, body, id, userId ) {
//         this.title = title
//         this.body = body
//         this.id = id
//         this.userId = userId
//         this.container = document.createElement('div')
//         this.name = document.createElement('p')
//         this.email = document.createElement('p')
//         this.text = document.createElement('h2')
//         this.about = document.createElement('p')
//         this.removeButton = document.createElement("button");
//         this.userInfo = document.createElement('div')
//     }
//
//     createCard() {
//         this.container.className = 'container'
//         this.name.className = 'card-name'
//         this.email.className = 'card-email'
//         this.text.className = 'card-text'
//         this.about.className = 'card-title'
//         this.userInfo.className = 'user-info'
//
//         const usersUrl = `https://ajax.test-danit.com/api/json/users/${this.userId}`
//
//         axios.get(usersUrl).then(({ data }) => {
//             this.name.innerText = data.name
//             this.email.innerText = data.email
//         })
//
//         this.removeButton.className = 'remove-btn'
//         this.removeButton.innerText = 'X'
//         this.removeButton.addEventListener('click', (e) => {
//             axios.delete(`${postsUrl}/${this.id}`).then(r => console.log(r))
//             e.target.closest('.container').remove()
//         })
//
//         this.text.innerText = this.body
//         this.about.innerText = this.title
//
//         this.userInfo.append(this.name, this.email)
//         this.container.append(this.removeButton, this.userInfo, this.about, this.text)
//
//     }
//
//     render(selector = "body") {
//         this.createCard();
//         document.querySelector(selector).append(this.container);
//     }
// }
//
// axios.get(postsUrl).then(({ status, data}) => {
//     if (status === 200) {
//         data.forEach(({ title, body, userId, id }) => {
//             const card = new Card(title, body, id, userId)
//             card.render()
//         })
//     } else {
//         console.error('Error in get')
//     }
// })

const usersUrl = `https://ajax.test-danit.com/api/json/users`
const postsUrl = 'https://ajax.test-danit.com/api/json/posts';

class Card {
    constructor(user, post) {
        this.user = user;
        this.post = post;
        this.root = document.querySelector('.root')
        this.container = document.createElement('div');
        this.removeButton = document.createElement("button");
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e) { e.target.closest('.container').remove() };

    render() {
        this.removeButton.addEventListener('click', this.handleDelete);
        this.container.className = 'container'
        this.removeButton.className = 'remove-btn'
        this.removeButton.innerText = 'X'
        this.container.append(this.removeButton)
        const layout = `
                <div class="user-info">
                     <p class="card-name">${this.user.name}</p>
                     <p class="card-email">${this.user.email}</p>
                </div>
                <p class="card-title">${this.post.title}</p>
                <h2 class="card-text">${this.post.body}</h2>
        `;
        this.container.insertAdjacentHTML('beforeend', `${layout}`)
        this.root.append(this.container);
    }
}

(async () => {
    const users = await axios.get(usersUrl).then(({ data }) => data);
    const posts = await axios.get(postsUrl).then(({ data }) => data);
    posts.forEach(post => {
        const user = users.filter(user => user.id === post.userId)
        const card = new Card(...user, post)
        card.render();
    })
})();