const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidW1haXIteWF0b28iLCJhIjoiY2sxc3M3a2VuMGpiNDNicWM2dm5xeXJoOSJ9.dBD8CN13AHUUWJNXE_dieg'
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback({
                error: 'Unable to connect to the location services'
            }, undefined)
        } else if (body.features.length === 0) {
            callback({
                error: 'Unable to find location. Try another search'
            }, undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                placeName: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode