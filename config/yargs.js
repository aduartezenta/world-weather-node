const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Address of the city to list weather',
        demand: true
    }
}).argv

module.exports = {
    argv
}