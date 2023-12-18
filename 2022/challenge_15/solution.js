function decorateTree(base) {
  const RULES = {
    'PP': 'P',
    'RR': 'R',
    'BB': 'B',
    'BP': 'R',
    'RP': 'B',
    'BR': 'P',
    'PB': 'R',
    'PR': 'B',
    'RB': 'P'
  }
  const result = [base]

  for (let i = 0; i < base.split(' ').length - 1; i++) {
    const next = [];
    result[i].split(' ').forEach((l, index, array) => {
      if (array[index + 1]) {
        next.push(RULES[l + array[index + 1]])
      }
    })
    result.push(next.join(' '))
  }

  return result.reverse()
}