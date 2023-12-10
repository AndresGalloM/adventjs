function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1]
  let result = []

  coins.forEach(cant => {
    let b = Math.floor(change / cant)
    result = result.concat(b)
    change -= cant * b
  })
  
  return result.reverse()
}