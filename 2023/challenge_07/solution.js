function drawGift(size, symbol) {
  const box = []

  for (let i = 1; i <= size; i++) {
    const spaces = `${' '.repeat(size - i)}`
    const body = [size, 1].includes(i) ? '#'.repeat(size) : `#${symbol.repeat(size - 2)}#`
    const background = i - 1 < 1 ? '\n' : `${symbol.repeat(i - 2)}#\n`

    box.push(`${spaces}${body}${background}`)
  }
  console.log(box.slice(0))
  return box.join('') + box.splice(0, -2).reverse().join('')
}

console.log(drawGift(5, '*'))