function learn(time, courses) {
  let result = null

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      let sum = courses[i] + courses[j]
      if (sum <= time && (result === null || sum > courses[result[0]] + courses[result[1]])) {
        result = [i, j]
      }
    }
  }

  return result
}