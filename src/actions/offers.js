export const TOGGLE_FAVORITE_OFFER = 'TOGGLE_FAVORITE_OFFER'

// action that toggles favoriting of the offer
export const toggleFavoriteOffer = (offerParams) => ({
  type: TOGGLE_FAVORITE_OFFER,
  payload: offerParams,
})
