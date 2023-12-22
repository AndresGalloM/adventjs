function printTable(gifts) {
  let lognGift = 4
  let longQuantity = 8

  for (const {name, quantity} of gifts) {
    if (name.length > lognGift) lognGift = name.length
    if (quantity.toString().length > longQuantity) 
      longQuantity = quantity.toString().length
  }

  const totalLong = lognGift + longQuantity + 7
  let result = '+'.repeat(totalLong)
  result += `\n| ${'Gift'.padEnd(lognGift, ' ')} | ${'Quantity'.padEnd(longQuantity, ' ')} |`
  result += `\n| ${'-'.repeat(lognGift)} | ${'-'.repeat(longQuantity)} |`

  
  for (let {name, quantity} of gifts) {
    name = name.padEnd(lognGift, ' ')
    quantity = quantity.toString().padEnd(longQuantity, ' ')
    result += `\n| ${name} | ${quantity} |`
  }

  return result += '\n' + '*'.repeat(totalLong)
}