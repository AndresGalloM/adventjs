function countHours(year, holidays) {
  return holidays.reduce((acc, date) => {
    const day = new Date(`${year}/${date}`).getDay()
    if (day > 0 && day < 6) acc += 2
    return acc
  }, 0)
}