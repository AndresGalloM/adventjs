function drawGift(size, symbol) {
  const up = []
  const down = []

  for (let i = 1; i <= size; i++) {
    const spaces = `${' '.repeat(size - i)}`
    const body = [size, 1].includes(i) ? '#'.repeat(size) : `#${symbol.repeat(size - 2)}#`
    const background = (i - 1) < 1 ? '\n' : `${symbol.repeat(i - 2)}#\n`

    up.push(`${spaces}${body}${background}`)
    down.push(`${body}${background}`)
  }

  return up.join('') + down.slice(0, -1).reverse().join('')
}

console.log(drawGift(5, '*'))