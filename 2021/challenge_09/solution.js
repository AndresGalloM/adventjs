function groupBy(collection, it) {
  const f = it instanceof Function ? it : item => item[it]

  return collection.reduce((acc, item) => {
    const key = f(item)
    if (!acc[key]) acc[key] = []
    acc[key].push(item)
    return acc
  }, {})
}