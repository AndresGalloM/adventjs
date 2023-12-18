function autonomousDrive(store, movements) {
  let location = {
    y: 0,
    x: 0
  }
  const directions = {
    'R': () => ({y: location.y, x: location.x + 1}),
    'L': () => ({y: location.y, x: location.x - 1}),
    'U': () => ({y: location.y - 1, x: location.x}),
    'D': () => ({y: location.y + 1, x: location.x})
  }
  
  store.findIndex((road, index) => {
    if (road.includes('!')) {
      location.y = index
      location.x = road.indexOf('!')
      return true
    }
  })

  const modifyCharacter = (l, character) => {
    let road = store[l.y].split('') 
    road[l.x] = character
    return road.join('')
  }
  
  for (const movement of movements) {
    const move = directions[movement]()
  
    if (store[move.y]?.[move.x] === '.') {
      store[location.y] = modifyCharacter(location, '.')
      store[move.y] = modifyCharacter(move, '!')
      location = {...move}
    }
  }

  return store
}