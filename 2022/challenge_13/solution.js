function getFilesToBackup(lastBackup, changes) {
  return changes.reduce((acc, change) => {
    if (change[1] > lastBackup && !acc.includes(change[0])) acc.push(change[0])
    return acc
  }, []).sort((a, b) => a - b)
}