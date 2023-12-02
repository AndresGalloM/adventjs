function manufacture(gifts, materials) {
  return gifts.filter(gift => 
    gift.split('').every(l => materials.includes(l))
  )
}