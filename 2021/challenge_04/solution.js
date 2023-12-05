function createXmasTree(height) {
  let tree = ''
  const base = `${'_'.repeat(height - 1)}${'#'}${'_'.repeat(height - 1)}\n`.repeat(2)

  for (let i = 0; i < height; i ++) {
    tree += `${'_'.repeat(height - i - 1)}${'*'.repeat(i * 2 + 1)}${'_'.repeat(height - i - 1)}\n`
  }

  return (tree + base).trim()
}