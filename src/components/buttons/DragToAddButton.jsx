import React from 'react';
import { Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { addLocation } from '../../reducers/actions';
import createMarker from '../../utils/marker/create';
import smile from '../../resources/defaultIcons/smile.svg';

// remember to change svg size to allow cursor
const DragToAddButton = ({svgIcon,content,type,children}) => {
  const state = useSelector(state => state)
  const { google } = state

  //default values
  svgIcon = svgIcon?svgIcon:smile
  content =content?content:"Added Content"
  type = type?type:"Added Type"

  const dispatch = useDispatch();

  const cursorOptions = {
    draggableCursor: `url(${svgIcon}), crosshair`
  }

  //need to rename for clarity
  const dragLocation = () => {
    google.map.setOptions(cursorOptions); //sets cursor to svg

    const addMarker = google.maps.event.addListener(google.map, 'click', (event) => {
      const location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      placeMarker(location);
    });

    const placeMarker = (location) => {
      const options = {
        icon: svgIcon,
        content,
        type
      }
      const markerdata = createMarker(google, location, options)
      google.maps.event.removeListener(addMarker)
      google.map.setOptions({ draggableCursor: '' });

      //sends to Actions to store in redux state
      dispatch(addLocation(markerdata));
    }

  }

  return (
    <Button className="blue"
      id="addLocationsButton"
      onClick={dragLocation}>
      {children} </Button>
  )

}

export default DragToAddButton