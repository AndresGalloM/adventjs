function checkPart(part) {
  part = part.replaceAll(' ', '')

  return [...part].some((l, i) => {
    if (acc) return true
    let a = part
    if (l !== part.at(-(i + 1))) {
      a = part.slice(0, i) + part.slice(i + 1)
    }
    return a === [...a].reverse().join('')
  })
}

console.log(checkPart("uwuww"))