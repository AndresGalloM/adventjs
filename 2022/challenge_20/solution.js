function howManyReindeers(reindeerTypes, gifts) {
  const ord_reindeers = reindeerTypes.sort(
    (a, b) => b.weightCapacity - a.weightCapacity
  )
  const reindeers = [...ord_reindeers].reverse()

  return gifts.map(({ country, weight }) => {
    const data = ord_reindeers.map(
      i1 => ({ type: i1.type, num: 0 })
    )

    let sum = 0

    while (sum < weight) {
      for (const reindeer of reindeers) {
        if (sum + reindeer.weightCapacity > weight) continue

        sum += reindeer.weightCapacity
        data.find(i2 => reindeer.type === i2.type).num++
      }
    }

    return {
      country,
      reindeers: data.filter(({ num }) => num > 0)
    }
  })
}