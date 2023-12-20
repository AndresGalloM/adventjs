function revealSabotage(store) {
  return store.map((gifts, i) => {
    return gifts.reduce((acc, gift, j) => {
      if (gift === ' ') {
        const neighbors = j ? j - 1 : 0
        gift = [].concat( 
          store[i - 1]?.slice(neighbors, j + 2),
          store[i + 1]?.slice(neighbors, j + 2),
          store[i][j + 1],
          store[i][j - 1]
        ).filter(ele => ele === '*').length || ' '
      }

      acc.push(gift.toString())
      return acc
    }, [])
  })
}