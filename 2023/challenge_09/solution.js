function adjustLights(lights) {
  let reference = {
    '🟢': 0,
    '🔴': 0
  }

  for (let i = 0; i < lights.length; i += 2) {
    reference[lights[i]]++
  }

  let referenceColor = reference['🔴'] > reference['🟢'] ? '🔴' : '🟢'
  let count = 0
  let i = 0
  for (const light of lights) {
    if (
      (i % 2 === 1 && light === referenceColor) ||
      (i % 2 === 0 && light !== referenceColor)
    ) count++
    i++
  }
  
  return count
}