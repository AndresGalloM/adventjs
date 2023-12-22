function findBalancedSegment(message) {
  let max = 0
  let result = []

  for (const i of message.keys()) {
    let zero = 0
    let one = 0
    for (let j = i; j < message.length; j++) {
      message[j] ? one++ : zero++

      if(zero === one && one > max) {
        result = [i, j]
        max = one
      }
    }
  }

  return result
}