import axios from 'axios'
import {BaseURL} from '../utils/config'

const getWeather = async (location) =>{
    const config = {
        params: {
            lat: location.lat,
            lon: location.lng,
        }
    }
    const weather = await axios.get(`${BaseURL}api/weather`,config)
    return weather.data
}

export default getWeather