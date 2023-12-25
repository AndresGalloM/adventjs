function canMouseEat(direction, game) {
  const [MOUSE_SYMBOL, MOUSE_FOOD_SYMBOL] = ['m', '*']
  const MOVES = {
    UP: [-1, 0],
    DOWN: [1, 0],
    LEFT: [0, -1],
    RIGHT: [0, 1]
  }

  const mouseRow = game.findIndex(row => row.includes(MOUSE_SYMBOL))
  const mouseColumn = game[mouseRow].indexOf(MOUSE_SYMBOL)
  const mouseMove = MOVES[direction.toUpperCase()]

  return game[mouseRow + mouseMove[0]]?.[mouseColumn + mouseMove[1]] === MOUSE_FOOD_SYMBOL
}