//Config files, single location for changable items

export const BaseURL = "/"

//Google maps API key 
export const googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API;


// google.maps.MapOptions interface
// more info here: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
export const googleMapsOptions = {
    zoom: 5,
    center: {
        lat: 53.0326482,
        lng: 2.1383704
    },
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
}