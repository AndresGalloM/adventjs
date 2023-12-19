function carryGifts(gifts, maxWeight) {
  gifts = gifts.filter(gift => gift.replaceAll(' ', '').length <= maxWeight)

  if (!gifts.length) return []
  
  return gifts.slice(1).reduce((acc, gift) => {
    (acc.at(-1) + gift).replaceAll(' ', '').length <= maxWeight
      ? acc[acc.length - 1] += ' ' + gift
      : acc.push(gift)

    return acc
  }, [gifts[0]])
}