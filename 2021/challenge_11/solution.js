function shouldBuyFidelity(times) {
  const costTickets = 12 * times
  let costFidelityCard = 250

  for (let i = 1; i <= times; i++) {
    costFidelityCard += 12 * (0.75 ** i)    
  }

  return costFidelityCard < costTickets
}