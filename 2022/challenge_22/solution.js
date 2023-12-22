function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every((name, index) => {
    return (
      stepNumbers[index] <= stepNumbers[index + systemNames.slice(index + 1).indexOf(name) + 1]
    )
  })
}