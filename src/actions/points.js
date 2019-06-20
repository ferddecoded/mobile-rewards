export const SET_NEW_POINTS = 'SET_NEW_POINTS'
export const SET_AWAITING_POINTS = 'SET_AWAITING_POINTS'

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

export const setAwaitingPoints = () => {
  return {
    type: SET_AWAITING_POINTS,
  }
}
