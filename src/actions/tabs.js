export const SET_TAB = 'SET_TAB'

export const setTab = (tab) => {
  return ({
    type: SET_TAB,
    payload: tab,
  })
}
