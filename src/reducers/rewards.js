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
    default:
      return state
  }
}
