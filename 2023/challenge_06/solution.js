function maxDistance(movements) {
  const a = movements.replaceAll(/[><]/g, '')
  const b = movements.replaceAll('<', '')
  const c = movements.replaceAll('>', '')

  return Math.abs(b.length - c.length) + a.length
}

const movements = '>>*<<<*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5