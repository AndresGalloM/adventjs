function transformTree(tree) {
  const makeTree = (index = 0) => {
    let result = null

    if (index < tree.length && tree[index] !== null) {
      result = {
        value: tree[index],
        left: makeTree(2 * index + 1),
        right: makeTree(2 * index + 2)
      }
    }

    return result
  }

  return makeTree()
}