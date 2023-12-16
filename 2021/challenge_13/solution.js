function wrapGifts(gifts) {
  const tb = '*'.repeat(gifts[0]?.length + 2) || []
  return [].concat(tb).concat(gifts.map(gift => `*${gift}*`)).concat(tb)
}