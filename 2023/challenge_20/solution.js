function distributeGifts(weights) {
  const neighbors = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [0, 0]
  ]
  const result = []

  for (const [iRow, row] of weights.entries()) {
    result.push([])
    for (const [iColumn] of row.entries()) {
      let sum = 0
      let count = 0

      for (let [y, x] of neighbors) {
        y += iRow
        x += iColumn

        if (weights[y]?.[x] ?? false) {
          sum += weights[y][x]
          count++
        }
      }

      result[iRow].push(Math.round(sum / count))
    }
  }

  return result
}