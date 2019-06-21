import { REDEEM_REWARD } from '../actions/rewards'

const initialState = [
  {
    brand: 'Amazon',
    cost: 2500,
    id: 0,
  },
  {
    brand: 'Tim Hortons',
    cost: 5000,
    id: 1,
  },
  {
    brand: 'Starbucks',
    cost: 10000,
    id: 2,
  },
]

export default function rewards(state = initialState, action) {
  switch (action.type) {
    case REDEEM_REWARD: {
      const newState = [...state]
      const redeemedRewardIndex = newState.findIndex((reward) => {
        return reward.id === action.payload.id
      })
      newState[redeemedRewardIndex].redeemed = !newState[redeemedRewardIndex].redeemed
      newState[redeemedRewardIndex].redeemedDate = action.payload.date
      return newState
    }
    default:
      return state
  }
}
