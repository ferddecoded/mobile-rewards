import { SET_TAB } from '../actions/tabs'

const initialState = 'points'

export default function tabs(state = initialState, action) {
  switch (action.type) {
    case SET_TAB:
      return action.payload
    default:
      return state
  }
}
