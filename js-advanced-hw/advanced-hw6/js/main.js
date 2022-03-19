const ipBtn = document.querySelector('.ip-btn')
const urlIp = 'https://api.ipify.org/?format=json'
const container = document.querySelector('.container')

async function getIp() {
    const res = await fetch(urlIp)
    const ip = await res.json()
    return ip.ip
}

async function getInfo() {
    const user = await getIp()
    const infoResponse = await fetch(`http://ip-api.com/json/${user}?fields=continent,country,city,regionName`)
    const info = await infoResponse.json()
    const { continent, country, city, regionName } = info
    container.insertAdjacentHTML('beforeend',
        `
                    <p>Continent : ${continent}</p>
                    <p>Country : ${country}</p>
                    <p>City : ${city}</p>
                    <p>Region Name : ${regionName}</p>
        `)
}

ipBtn.addEventListener('click', getInfo)


