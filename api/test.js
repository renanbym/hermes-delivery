require('dotenv').config();
const axios = require('axios');




const getGeoCodingFromAddred = async ( address ) => {
    try {
        const result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_KEY}`)
        console.log(result.data.results[0].geometry.location)
        return result.data.results;
    } catch (error) {
        console.log(error.response.data)
    }

}

const getDistance = async ( from, to ) => {
    try {
        const result = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(from)}&destinations=${encodeURIComponent(to)}&avoid=tools&mode=DRIVING&key=${process.env.GOOGLE_KEY}`)
        console.log(result.data.rows[0].elements[0])
        return result.data;
    } catch (error) {
        console.log(error)
    }

}

const degreesToRadians = degrees => degrees * (Math.PI / 180)
const radiansToDegrees = radians => radians * (180 / Math.PI)


const centralSubtendedAngle = (locationX, locationY) => {
    const locationXLatRadians = degreesToRadians(locationX.latitude)
    const locationYLatRadians = degreesToRadians(locationY.latitude)
    return radiansToDegrees(
        Math.acos(
            Math.sin(locationXLatRadians) * Math.sin(locationYLatRadians) +
            Math.cos(locationXLatRadians) *
                Math.cos(locationYLatRadians) *
                Math.cos(
                degreesToRadians(
                    Math.abs(locationX.longitude - locationY.longitude)
                )
            )
        )
     )
}

const earthRadius = 6371
const greatCircleDistance = angle => 2 * Math.PI * earthRadius * (angle / 360)
const distanceBetweenLocations = (locationX, locationY) => greatCircleDistance(centralSubtendedAngle(locationX, locationY))

const marketAddress = "Avenida Ivens, 20, 2610-089, Amadora"
const marketGeocoding = { latitude: 38.7347219, longitude: -9.2190054 };
const customerAddress = "Av. Antero de Quental 2, 2910-394 Setúbal"
const customerGeocoding = { latitude: 38.53719330000001, longitude: -8.8757775 };


const taxOfPickUp = 0;
const priceByKilometer = 0.75;
const priceByMeter = priceByKilometer / 1000;

const distance = { 
    distanceLocation: { test: '37.02 km', value: 37029 },
    distance: { text: '49.3 km', value: 49296 },
    duration: { text: '34 mins', value: 2055 }
}

console.log(taxOfPickUp + priceByMeter * distance.distance.value)
console.log(taxOfPickUp + priceByMeter * distance.distanceLocation.value)

// console.log(distanceBetweenLocations(customerGeocoding, marketGeocoding) * 1000)
// getGeoCodingFromAddred( customerAddress ) 
// getDistance( `${marketGeocoding.latitude},${marketGeocoding.longitude}`, `${customerGeocoding.latitude},${customerGeocoding.longitude}` )