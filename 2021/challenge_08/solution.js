function maxProfit(prices) {
  let max = -1

  prices.forEach((price, i) => {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - price > max) max = prices[j] - price
    }
  });

  return max
}