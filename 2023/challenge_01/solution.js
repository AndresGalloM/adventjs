function findFirstRepeated(gifts) {
  const set = new Set()

  for (const gift of gifts) {
    if (set.has(gift)) return gift
    set.add(gift)
  }

  return -1
}