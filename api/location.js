const axios = require('axios')

const getLocation = async(address) => {

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com',
        headers: {
            'x-rapidapi-hostr': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'a792bbaf6amshd16fb2257dd107dp113ce7jsn7774d5ae9ea5'
        }
    });

    const response = await instance.get('/latlon.php', {
        params: {
            location: address
        }
    })
    const results = response.data.Results
    if (results.length == 0) {
        throw new Error(`Results not found for ${address}`)
    }

    const result = results[0]
    return {
        name: result.name,
        lat: result.lat,
        lon: result.lon
    }

}

module.exports = {
    getLocation
}