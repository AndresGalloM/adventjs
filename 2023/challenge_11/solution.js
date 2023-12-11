function getIndexsForPalindrome(word) {
  word = word.trim().toLowerCase().split('')

  if (word.join('') === [...word].reverse().join('')) return []

  let i = 0
  for (const il of word) {
    let j = 0
    for (const jl of word) {
      const preview = [...word]
      preview[j] = il
      preview[i] = jl
      
      if (preview.join('') === preview.reverse().join('')) return [i, j]
      j++
    }
    i++
  }

  return null
}