import { SET_NEW_POINTS, SET_AWAITING_POINTS } from '../actions/points'

const initialState = {
  awaitingPoints: false,
  accumulatedPoints: [
    {
      brand: 'Amazon',
      amount: 1643,
      date: '2017-07-01',
      id: 0,
    },
    {
      brand: 'Tim Hortons',
      amount: 120,
      date: '2017-06-25',
      id: 1,
    },
    {
      brand: 'Starbucks',
      amount: 235,
      date: '2017-06-21',
      id: 2,
    },
    {
      brand: 'Metro',
      amount: 785,
      date: '2017-07-01',
      id: 0,
    },
    {
      brand: 'Amazon',
      amount: 163,
      date: '2017-06-25',
      id: 1,
    },
    {
      brand: 'Tim Hortons',
      amount: 53,
      date: '2017-06-21',
      id: 2,
    },
  ],
};

export default function points(state = initialState, action) {
  switch (action.type) {
    case SET_AWAITING_POINTS:
      return { ...state, awaitingPoints: true }
    case SET_NEW_POINTS: {
      const newAccumulatedPoints = [...state.accumulatedPoints, action.payload]
      const newState = {
        awaitingPoints: false,
        accumulatedPoints: newAccumulatedPoints,
      }
      return newState
    }
    default:
      return state
  }
}
