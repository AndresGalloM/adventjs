function getOptimalPath(path) {
  const aux = [path[0]]
  for (let i = 0; i < path.length - 1; i++) {
    aux.push([])
    for (let j = 0; j < path[i].length; j++) {
      aux[i + 1].push(path[i + 1][j] + aux[i][j], path[i + 1][j + 1] + aux[i][j])
    }
  }

  return Math.min(...aux[aux.length - 1])
}