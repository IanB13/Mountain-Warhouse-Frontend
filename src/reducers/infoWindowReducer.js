const infoWindowReducer = (state = null, action) => {
    switch (action.type) {
      case 'OPEN_INFOWINDOW':
        return action.data
      default:
        return state
    }
  }
  
  
  export default infoWindowReducer