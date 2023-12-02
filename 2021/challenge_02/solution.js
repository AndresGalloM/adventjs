function listGifts(letter) {
  return letter.toLowerCase().split(' ').reduce((acc, gift) => {
    if (gift && !gift.startsWith('_')) {
      acc[gift] = acc[gift] + 1 || 1
    }
    return acc
  }, {});
}