function compile(code) {
  let value = 0
  let index = 0
  let indexReturn = -1

  const instructions = {
    '+': () => value++,
    '-': () => value--,
    '*': () => (value *= 2),
    '%': () => (indexReturn = index),
    '<': () => {
      if ( indexReturn !== -1) i = indexReturn
      indexReturn = -1
    },
    '¿': () =>
      (index = value <= 0 ? code.slice(index).indexOf('?') + index : index)
  }

  while (code[index]) {
    instructions[code[index]]?.()
    index++
  }

  return value
}