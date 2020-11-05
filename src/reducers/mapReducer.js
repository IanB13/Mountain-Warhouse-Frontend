const mapReducer = (state = {loading:true}, action) => {
    switch (action.type) {
      case 'INIT_MAP':
        const estimate = action.data
        return estimate
      case 'INIT_DIRECTIONS_RENDERER':
        const mapDirections = action.data
        return mapDirections
      case 'CLEAR_DIRECTIONS_RENDER':
        if (state?.directionsRenderer) {
          state.directionsRenderer.set('directions', null);
        }
        return state
      default:
        return state
    }
  }
  
  
  export default mapReducer