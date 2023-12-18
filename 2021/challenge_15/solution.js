function checkSledJump(heights) {
  const greater = heights.indexOf(Math.max(...heights))
  const left = heights.slice(0, greater)
  const right = heights.slice(greater + 1)

  if (!left.length || !right.length) return false

  for (let i = 0; i < heights.length; i++) {
    if ((i < greater && heights[i] >= heights[i + 1]) ||
        (i > greater && heights[i] <= heights[i + 1])) {
      return false
    }
  }

  return true
}