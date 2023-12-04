function isValid(letter) {
  letter = letter.replace(/\s/g, '')
  if (['[', '{', '()'].some(symbol => letter.includes(symbol))) return false
 
  let close = 0
  let open = 0

  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === '(') open++
    if (letter[i] === ')') {
      close++
      if (close > open) return false
    }
  }

  return close === open
}