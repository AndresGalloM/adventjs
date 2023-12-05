function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const combinations = giftsCities.reduce(
    (acc, numGifts) => {
      return acc.concat(acc.map(existingCombination => [numGifts].concat(existingCombination)))
    },
    [[]]
  );
  
  const validCombinations = combinations.filter(c => c.length <= maxCities);
  let max = 0

  validCombinations.forEach(combination => {
    let sum = combination.reduce((acc, num) => acc += num, 0)
    if (sum <= maxGifts && sum > max) max = sum
  });

  return max
}