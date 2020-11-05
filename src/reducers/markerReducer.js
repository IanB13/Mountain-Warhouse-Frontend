const markerReducer = (state = {loading:true}, action) => {
    switch (action.type) {
      case 'INIT_MARKERS':
        const initJobs = action.data
        return initJobs
      case 'ADD_LOCATION':
        const newLocation = action.data
        if(state.loading) return [action.data]
        console.log(state)
        const allLocations = state.concat(newLocation) 
        return allLocations
      case 'CLUSTER_MARKERS':
        //TODO: Add optional clustering
        return action.data
      case 'UPDATE_MARKERS':
        return action.data
      case 'ADD_TRAVEL':
        return action.data
      default:
        return state
    }
  }
  
  export default markerReducer