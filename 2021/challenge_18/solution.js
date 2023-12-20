function fixFiles(files) {
  const names = {}

  return files.reduce((acc, file) => {
    names[file] = names[file] ? names[file] += 1 : 1

    if (names[file] > 1) file = `${file}(${names[file] - 1})`
    acc.push(file)
    return acc
  }, [])
}