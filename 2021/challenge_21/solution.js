function canCarry(capacity, trip) {
  let sum = 0
  let previousDelivery = 0

  for (const [gifts, collectionPoint, deliveryPoint] of trip) {
    if (collectionPoint >= previousDelivery) sum = 0

    sum += gifts

    if (sum > capacity) return false
    previousDelivery = deliveryPoint
  }

  return true
}