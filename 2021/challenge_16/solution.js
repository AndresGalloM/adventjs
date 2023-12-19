function decodeNumbers(symbols) {
  let result = 0
  const values = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  for (let i = 0; i < symbols.length; i++) {
    values[symbols[i]] < values[symbols[i + 1]] 
      ? result -= values[symbols[i]]
      : result += values[symbols[i]]
  }

  return result
}