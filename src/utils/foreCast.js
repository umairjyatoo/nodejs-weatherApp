const request = require('request')

const foreCast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/09c44f1a0afef5e3fe47e99b6d7aeb98/' + longitude + ',' + latitude + ''
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, 'It is  currently ' + body.currently.temperature + ' out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = foreCast