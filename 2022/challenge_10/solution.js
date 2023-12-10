function checkJump(heights) {
  const maxHeight = heights.indexOf(Math.max(...heights))
  const left = heights.slice(0, maxHeight)
  const right = heights.slice(maxHeight + 1)

  return left.length > 0 && right.length > 0 &&
         left.join('') === left.sort((a, b) => a - b).join('') &&
         right.join('') === right.sort((a, b) => b - a).join('')
}