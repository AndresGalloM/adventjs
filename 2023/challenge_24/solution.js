function getStaircasePaths(steps, maxJump) {
  const posibleSteps = (currentStep, path) => {
    let result = []
    if (currentStep === steps) {
      return [path]
    }

    for (let jump = 1; jump <= maxJump; jump++) {
      if (currentStep + jump <= steps) {
        const newPath = path.concat(jump)
        result = result.concat(posibleSteps(currentStep + jump, newPath))
      }
    }

    return result
  }

  return posibleSteps(0, [])
}