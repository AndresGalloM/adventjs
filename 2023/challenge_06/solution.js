function maxDistance(movements) {
  const a = movements.replaceAll(/[><]/g, '')
  const b = movements.replaceAll('<', '')
  const c = movements.replaceAll('>', '')

  return Math.abs(b.length - c.length) + a.length
}