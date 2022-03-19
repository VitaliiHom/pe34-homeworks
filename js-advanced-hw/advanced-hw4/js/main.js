const url = 'https://ajax.test-danit.com/api/swapi/films';
const div = document.createElement('div');
document.body.prepend(div);
const preloader = document.querySelector('.animate');

const request = fetch(url)
    .then((r) => {
        if (r.ok){
            return r.json()
        } else {
            console.error('Bar response')
        }
    });

request.then((result) => {
    result.forEach((films) => {
        const filmInfo = document.createElement('div')
        const peopleInfo = document.createElement('ul')
        films.characters.forEach(link => {
            fetch(link)
                .then(response => response.json())
                .then(characters => {
                    const li = document.createElement('li')
                    li.innerText = characters.name
                    peopleInfo.append(li)
                    preloader.style.display = 'none'
                })
        })
        filmInfo.innerHTML =
            `
            <h3>Episode: ${films.episodeId}</h3>
            <h4>${films.name}</h4>
            <p>${films.openingCrawl}</p>   
            `
        div.append(filmInfo, peopleInfo)
    })
});

