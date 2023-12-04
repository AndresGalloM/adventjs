function findNaughtyStep(original, modified) {
  if (original === modified) return ''

  const index = [...original].findIndex((l, i) => l !== modified[i])
  return original.length > modified.length 
          ? original[index] 
          : modified[index] || modified[original.length]
}