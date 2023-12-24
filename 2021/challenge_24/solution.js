function checkIsSameTree(treeA, treeB) {
  const sum = (knot) => {
    let value = 0
    if (knot.left) value += sum(knot.left)
    if (knot.right) value += sum(knot.right)

    return value += knot.value
  }

  return sum(treeA) === sum(treeB)
}