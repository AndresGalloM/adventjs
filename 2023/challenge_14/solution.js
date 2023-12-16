function maxGifts(houses) {
  let maxGifts = 0
  let prevGifts = 0

  for (const house of houses) {
    const newMax = Math.max(maxGifts, prevGifts + house)
    prevGifts = maxGifts
    maxGifts = newMax
  }

  return maxGifts
}