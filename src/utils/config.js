//Config files, single location for changable items

export const BaseURL = "http://localhost:3000/"

//Google maps API key 
export const googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API;


// google.maps.MapOptions interface
// more info here: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
export const googleMapsOptions = {
    zoom: 10.06,
    center: {
        lat: 51.4894681,
        lng:  -0.1324313
    },
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
}