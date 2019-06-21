export const SET_NEW_POINTS = 'SET_NEW_POINTS'
export const SET_AWAITING_POINTS = 'SET_AWAITING_POINTS'

// action that sets new points
export const setNewPoints = (newPoints, timeDelay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: SET_NEW_POINTS,
        payload: newPoints,
      })
    }, timeDelay)
    return dispatch(setAwaitingPoints())
  }
}

// action that sets a flag for the app,
// preventing the app from having to call setNewPoints on every render
export const setAwaitingPoints = () => {
  return {
    type: SET_AWAITING_POINTS,
  }
}
