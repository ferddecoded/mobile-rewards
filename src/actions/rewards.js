export const REDEEM_REWARD = 'REDEEM_REWARD'

// action that redeems a reward
export const redeemReward = (id, date) => {
  return ({
    type: REDEEM_REWARD,
    payload: { id, date },
  })
}
