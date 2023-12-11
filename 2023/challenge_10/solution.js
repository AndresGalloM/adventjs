function createChristmasTree(ornaments, height) {
  let tree = ''
  let aux = 0
  let i = 1
  ornaments = ornaments.padEnd((height * (height + 1)) / 2, ornaments)

  for (const _ of new Array(height)) {
    const filled = ornaments.slice(aux, aux + i).split('').join(' ') + '\n'
    tree += filled.padStart(height + i)
    aux = aux + i
    i++
  }

  return tree += '|\n'.padStart(height + 1)
}