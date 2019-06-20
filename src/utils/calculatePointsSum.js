const sum = (pointsArray, key) => pointsArray.reduce((acc, curr) => acc + (curr[key] || 0), 0)

export default sum
