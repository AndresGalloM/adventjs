function canExit(maze) {
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  const y = maze.findIndex(row => row.includes('S'))
  const x = maze[y].indexOf('S')
  
  const search = (y, x) => {
    let path = false
    for (let [my, mx] of moves) {
      my += y
      mx += x
      if (maze[my]?.[mx] === 'E') return true
      if (maze[my]?.[mx] === ' ' && !path) {
        maze[my][mx] = 'V'
        path = search(my, mx)
      }
    }
    return path
  }

  return search(y, x)
}