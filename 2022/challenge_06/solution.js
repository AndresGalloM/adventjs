function createCube(size) {
  const backgroundUp = '_\\'.repeat(size)
  const backgroundDown = '_/'.repeat(size)
  const bodyUp = []
  const bodyDown = []

  for (let i = 1; i <= size; i++) {
    bodyUp.push(' '.repeat(size - i) + '/\\'.repeat(i) + backgroundUp)
    bodyDown.push(' '.repeat(size - i) + '\\/'.repeat(i) + backgroundDown)
  }

  return bodyUp.concat(bodyDown.reverse()).join('\n')
}