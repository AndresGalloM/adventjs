function travelDistance(map) {
  map = map.split('\n')
  const findCoordinates = symbol => {
    let y = map.findIndex(row => row.includes(symbol))
    let x = map[y]?.indexOf(symbol)
    return [y, x]
  }

  let santa = findCoordinates('S')
  let i = 1
  let steps = 0
  
  while ((coor = findCoordinates(i))[0] !== -1) {
    steps += Math.abs(santa[0] - coor[0]) + Math.abs(santa[1] - coor[1])
    santa = coor
    i++
  }

  return steps
}