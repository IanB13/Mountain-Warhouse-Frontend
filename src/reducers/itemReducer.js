const itemReducer = (state = {tags:null,open:false}, action) => {
    switch (action.type) {
      case 'CHANGE_TAGS':
        const newState = {...state}
        newState.tags = action.data
        return newState
      default:
        return state
    }
  }
  
  export default itemReducer