const axios = require('axios')

const getWeather = async(lat, lon) => {

    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5',
    });

    const response = await instance.get('/weather', {
        params: {
            lat: lat,
            lon: lon,
            appid: '9974e33f2e4c1d9813738437f6aa9bdb',
            units: 'metric'
        }
    })
    const result = response.data.main
    if (!result) {
        throw new Error(`Results not found for ${address}`)
    }
    return {
        temp: result.temp,
        temp_min: result.temp_min,
        temp_max: result.temp_max,
        feels_like: result.feels_like
    }

}

module.exports = {
    getWeather
}