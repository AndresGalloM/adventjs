function wrapping(gifts) {
  return gifts.map(gift => {
   const w = '*'.repeat(gift.length + 2);
   return `${w}\n*${gift}*\n${w}`
  })
}