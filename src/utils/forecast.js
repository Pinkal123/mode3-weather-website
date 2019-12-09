const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/04d5931d158bef41ffbd28e212259316/40,-75'
    request({url, json:true},( error, { body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('unable to connect to weather service', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently "+body.currently.temperature +" degrees out.There is a "+body.currently.precipProbability+"% chance of rain.")
        }
    }
    )
}

module.exports = forecast