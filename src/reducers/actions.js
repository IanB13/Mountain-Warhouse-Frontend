import {googleApiKey, googleMapsOptions} from "../utils/config"
import GoogleMapsApiLoader from "google-maps-api-loader";

//Loading sequence to start, creates map and sets markers
export const googleFinishedLoading  = (mapRef) => async (dispatch) =>{
    await dispatch(initMap(mapRef))
  }

//Creates google map
export const initMap = (mapRef) =>{
    return async dispatch => {
        const google = await GoogleMapsApiLoader({ apiKey: googleApiKey })
        const map = new google.maps.Map(mapRef.current, googleMapsOptions)
        dispatch({
            type: 'INIT_MAP',
            data:{
                map,
                maps:google.maps,
                loading:false,
            }
        })
    }
}

export const addLocationThenSetWeather = () =>{


}

export const addLocation = (markerData) =>{
    return  dispatch => {
        dispatch({
            type: 'ADD_LOCATION',
            data: markerData,
        })
    }

}

