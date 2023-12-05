function decode(message) {
  const r = /\(([^()]*)\)/
  let matches

  while ((matches = r.exec(message))) {
    const reversed = matches[1].split('').reverse().join('')
    message = message.replace(matches[0], reversed)
  }

  return message
}