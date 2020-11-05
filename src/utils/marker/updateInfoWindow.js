import getWeather from '../../services/getWeather'
import {changeTags} from '../../reducers/actions'
import {store} from '../../reducers/store'

const updateInfoWindow = async (marker) =>{
    console.log(marker)
    const weather = await getWeather(marker.position)
    console.log(weather)

    //first letter of each word to caps
    const weatherDesc = weather.weather[0].description.split(' ').map(capitalize).join(' ');
    marker.infoWindow.setContent(`
        <div class = "infowindow">
            <h3>${weatherDesc}</h3>
            <img src = "http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"/>
            <ul>
                <li> Current: <span> ${Math.round(weather.main.feels_like -273)}°C </span>  </l1>
                <li> Max: <span> ${Math.round(weather.main.temp_max -273)}°C </span>  </l1>
                <li> Min: <span> ${Math.round(weather.main.temp_min -273)}°C </span>  </l1>
            </ul>
            <button id = "buyGear" class="ui button blue">Buy Gear</button>
        </div>
    `)
    store.dispatch(changeTags(weather.tags))
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

export default updateInfoWindow