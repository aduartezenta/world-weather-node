const argv = require('./config/yargs').argv
const { getLocation } = require('./api/location')
const { getWeather } = require('./api/weather')

const getInfo = async(address) => {
    const location = await getLocation(address)
    const weather = await getWeather(location.lat, location.lon)
    return {
        location,
        weather
    }
}

getInfo(argv.address)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })