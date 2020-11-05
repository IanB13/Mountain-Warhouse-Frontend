import defIcon from "../../resources/defaultIcons/smile.svg"
import {store} from '../../reducers/store'

/*options, maybe do typeScript for only this file 
options ={
    icon: svg, // Icon svg
    content: html string // for what to put into the information window
    type: string // ID for delete and direction operations
}
*/

const createMarker = (google, position, options) => {
    const iconSVG = options.icon?options.icon:defIcon; //uses smile if no default provided
    const content = options.content?options.content:"remember to add content!";
    const icon = {
        url: iconSVG,
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(40/2, 40/2)
      };

    const marker = new google.maps.Marker({
        position,
        map: google.map, 
        icon
  });

    const infoWindow = new google.maps.InfoWindow({
        content
    });

    marker.addListener('click',  () => {
        const markers = store.getState().markers
        markers.map((marker) => marker.infoWindow.close())
        infoWindow.open(google.map, marker);
    });

    const type = options.type?options.type:"generic"

    //return is placed into state
    return {
        marker,
        position,
        type,
        infoWindow
    }
}

export default createMarker