function organizeGifts(gifts) {
  const regex = /\d+[a-zA-Z]/g
  let result = ''

  for (const [gift] of [...gifts.matchAll(regex)]) {
    const num = gift.slice(0, -1)
    const letter = gift.at(-1)
    const numD = Math.floor(num / 10)

    result += `[${letter}]`.repeat(numD / 5) + 
              `{${letter}}`.repeat(numD - Math.floor(numD / 5) * 5) + 
              `(${letter.repeat(num.at(-1))})`.repeat(num.at(-1) > 0)
  }

  return result

  // Alternativa 
  // return [...gifts.matchAll(regex)].reduce((acc, gift) => {
  //   const num = gift[0].slice(0, -1)
  //   const letter = gift[0].at(-1)
  //   const numD = Math.floor(num / 10)

  //   return acc += `[${letter}]`.repeat(numD / 5) + 
  //          `{${letter}}`.repeat(numD - Math.floor(numD / 5) * 5) + 
  //          `(${letter.repeat(num.at(-1))})`.repeat(num.at(-1) > 0)
  // }, '')
}