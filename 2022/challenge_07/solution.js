function getGiftsToRefill(a1, a2, a3) {
  const store = [new Set(a1), new Set(a2), new Set(a3)].reduce((acc, a) => {
    a.forEach(gift => {
      gift in acc ? acc[gift] += 1 : acc[gift] = 1
    })

    return acc
  }, {})
  
  return Object.keys(store).filter(gift => store[gift] === 1)
}