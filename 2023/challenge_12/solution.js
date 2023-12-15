function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false

  const LettersDegrade = ['#', '+', ':', '.', ' '];
  return ![...copy].some((l, i) => {
    const degradeOptions = LettersDegrade.slice(LettersDegrade.indexOf(original[i]) + 1)
    return l !== original[i] && 
           original[i].toLowerCase() !== l &&
           !degradeOptions.includes(l)
  })
}