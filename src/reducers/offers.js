import { TOGGLE_FAVORITE_OFFER } from '../actions/offers'

const initialState = [
  {
    brand: 'Amazon',
    amount: 10,
    date: '2017-07-01',
    type: 'ongoing',
    id: 0,
  },
  {
    brand: 'Tim Hortons',
    amount: 5,
    date: '2017-06-02',
    type: 'ongoing',
    id: 1,
  },
  {
    brand: 'Starbucks',
    amount: 8,
    date: '2017-06-01',
    type: 'ongoing',
    id: 2,
  },
  {
    brand: 'Metro',
    amount: 9,
    date: '2017-07-01',
    type: 'ongoing',
    id: 3,
  },
  {
    brand: 'Safeway',
    amount: 10000,
    date: '2017-06-03',
    type: 'onetime',
    id: 4,
  },
]

export default function offers(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE_OFFER: {
      const newState = [...state]
      const toggleId = action.payload.id
      const toggledOfferIndex = newState.findIndex((offer) => {
        return offer.id === toggleId
      })
      newState[toggledOfferIndex].favorite = !newState[toggledOfferIndex].favorite
      return newState
    }
    default:
      return state
  }
}
