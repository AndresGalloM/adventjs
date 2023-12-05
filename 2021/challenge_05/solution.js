function daysToXmas(date) {
  const referenceDate = new Date('Dec 25, 2021')
  const days = referenceDate.getTime() - date.getTime()
  return Math.ceil(days / 1000 / 60 / 60 / 24)
}