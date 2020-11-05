const itemReducer = (state = {tags:null,open:false}, action) => {
  switch (action.type) {
    case 'CHANGE_TAGS':
      const newTagState = { ...state }
      newTagState.tags = action.data
      return newTagState
    case 'OPEN_ITEM_MODAL':
      const newOpenState = { ...state }
      newOpenState.open = true
      return newOpenState
    case 'CLOSE_ITEM_MODAL':
      const newClosedState = { ...state }
      newClosedState.open = false
      return newClosedState
    default:
      return state
  }
  }
  
  export default itemReducer